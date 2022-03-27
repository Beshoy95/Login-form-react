import { useEffect, useState } from "react";

const Signup = () => {
    const [userForm, setUserForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passswordConfirmation: "",
    });

    const [userFormErrs, setUserFormErrs] = useState({
        firstNameErr: null,
        lastNameErr: null,
        emailErr: null,
        passwordErr: null,
        passswordConfirmationErr: null,
    });
    const register = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(e.target.password.value);
        console.log(userFormErrs);
    };

    const handleFormChange = (event) => {
        if (event.target.id === "firstName") {
            setUserForm({ ...userForm, firstName: event.target.value });
            setUserFormErrs({
                ...userFormErrs,
                firstNameErr:
                    event.target.value === 0
                        ? "first name is requiered "
                        : event.target.value.length < 3
                            ? "Min. length is 3 characters"
                            : null,
            });
        }
        if (event.target.id === "passwordConfirmation") {
            setUserFormErrs({
                ...userFormErrs,
                passswordConfirmationErr:
                    event.target.value !== userForm.password
                        ? `the password doesn't match`
                        : null,
            });
        }

        if (event.target.id === "lastName") {
            setUserForm({ ...userForm, lastName: event.target.value });
            setUserFormErrs({
                ...userFormErrs,
                lastNameErr:
                    event.target.value === 0
                        ? "last name is requiered "
                        : event.target.value.length < 3
                            ? "Min. length is 3 characters"
                            : null,
            });
        }
        if (event.target.id === "email") {
            setUserForm({ ...userForm, email: event.target.value });
            setUserFormErrs({
                ...userFormErrs,
                emailErr:
                    event.target.value === 0
                        ? "email is requiered "
                        : !register.test(event.target.value)
                            ? "enter a valid email"
                            : null,
            });
        }
        if (event.target.id === "password") {
            setUserForm({ ...userForm, password: event.target.value });
            setUserFormErrs({
                ...userFormErrs,
                passwordErr:
                    event.target.value === 0
                        ? "password is requiered "
                        : event.target.value.length < 8
                            ? "enter a valid password"
                            : null,
            });
        }
    };

    return (<>
        <div>
            <form
                onSubmit={handleSubmitForm}
                className="justify-content-center text-start"
            >
                <div className="mb-3">
                    <label htmlFor="fisrtName" className="form-label">
                        fisrt Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${userFormErrs.firstNameErr ? "border-danger" : ""
                            }`}
                        id="firstName"
                        aria-describedby="firstnameHelp"
                        value={userForm.firstName}
                        onChange={handleFormChange}
                    />
                    <div id="firstNameHelp" className="form-text text-danger">
                        {userFormErrs.firstNameErr}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        last Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${userFormErrs.lastNameErr ? "border-danger" : ""
                            }`}
                        id="lastName"
                        aria-describedby="lastNameHelp"
                        value={userForm.lastName}
                        onChange={handleFormChange}
                    />
                    <div id="lastNameHelp" className="form-text text-danger">
                        {userFormErrs.lastNameErr}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        value={userForm.email}
                        onChange={handleFormChange}
                    />
                    <div id="emailHelp" className="form-text text-danger">
                        {userFormErrs.emailErr}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        password
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        aria-describedby="passwordHelp"
                        value={userForm.password}
                        onChange={handleFormChange}
                    />
                    <div id="passwordHelp" className="form-text text-danger">
                        {userFormErrs.passwordErr}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordConfirmation" className="form-label">
                        passsword Confirmation
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="passwordConfirmation"
                        aria-describedby="passwordConfirmationHelp"
                        value={userForm.passwordConfirmation}
                        onChange={handleFormChange}
                    />
                    <div id="emailHelp" className="form-text text-danger">
                        {userFormErrs.passswordConfirmationErr}
                    </div>
                </div>
                <button type="register" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    </>);
}

export default Signup;