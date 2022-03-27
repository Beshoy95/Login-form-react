import * as yup from "yup";
import React from 'react';
import { useFormik } from 'formik';

const Login = () => {
    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = yup.object({
        email: yup
            .string("")
            .email("please enter valid email")
            .required("email is required"),
        password: yup
            .string("")
            .min(8, "password must be at least 8 characters")
            .required("required"),
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <div className="container mx-auto ">
            <div className="text-center">
                <form onSubmit={formik.handleSubmit}>
                    <div className="">
                        <div className="mt-5">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm px-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="ex:person@gmail.com"
                                    autoComplete="given-name"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className=""
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                                )}
                            </div>

                            <div className="mt-5">
                                <label
                                    htmlFor="password"
                                    className="px-2"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="********"
                                    id="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className=""
                                />
                                {formik.errors.password && formik.touched.password && (
                                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                                )}
                            </div>
                        </div>
                        <div className="mt-5">
                            <button
                                type="submit"
                                className="btn btn-primary py-2 px-4  border border-transparent"
                            >
                                submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;