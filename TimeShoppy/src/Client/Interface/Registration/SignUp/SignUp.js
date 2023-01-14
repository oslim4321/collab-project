import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { validate } from "./Schema";
import SingUpWihGoggle from "./SingUpWihGoggle";

const SignUp = () => {
  const onSubmit = (values, action) => {
    console.log(values);
  };

  const {
    values,
    handleChange,
    touched,
    errors,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validate,
    onSubmit,
  });

  return (
    <div>
      <div>
        <div className="flex justify-center min-h-screen w-screen bg-[rgba(255, 255, 255, 0.5)]">
          <div className="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white rounded-2xl">
            <div className="text-center my-3">
              <h1 className="text-3xl font-semibold text-indigo-400">
                Join Time Shoppy
              </h1>
            </div>
            <div className="m-6">
              <form className="mb-4" onSubmit={handleSubmit} method="post">
                {/* importing sing up with google button */}
                <SingUpWihGoggle />

                <div className="text-sm text-gray-600 dark:text-gray-400 text-center uppercase my-2 font-semibold">
                  or
                </div>
                {/* name */}
                <div className="mb-3">
                  <input
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Full Name"
                    className={`w-full px-3 py-2 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 rounded-full bg-gray-100 border-none
                    ${errors.name && touched.name ? "input-error" : ""}`}
                  />
                  {errors.name && touched.name && (
                    <small className="text-red-500">{errors.name}</small>
                  )}
                </div>

                {/* email */}
                <div className="mb-3">
                  <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    className={`w-full px-3 py-2 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 rounded-full bg-gray-100 border-none
                    ${errors.email && touched.email ? "input-error" : ""}`}
                  />
                  {errors?.email && touched.email && (
                    <small className="text-red-500">{errors.email}</small>
                  )}
                </div>

                {/* password */}
                <div className="mb-3">
                  <div className="flex justify-between mb-2"></div>
                  <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    autoComplete="on"
                    className={`w-full px-3 py-2 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 rounded-full bg-gray-100 border-none
                    ${
                      errors.password && touched.password ? "input-error" : ""
                    }`}
                  />
                  {errors?.password && touched.password && (
                    <small className="text-red-500">{errors.password}</small>
                  )}
                </div>

                {/* confirm password */}
                <div className="mb-3">
                  <div className="flex justify-between mb-2"></div>
                  <input
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="confirm password"
                    autoComplete="on"
                    className={`w-full px-3 py-2 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 rounded-full bg-gray-100 border-none
                    ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "input-error"
                        : ""
                    }`}
                  />
                  {errors?.confirmPassword && touched.confirmPassword && (
                    <small className="text-red-500">
                      {errors.confirmPassword}
                    </small>
                  )}
                </div>

                <div className="mb-2">
                  <button
                    type="submit"
                    className="w-full px-3 py-2 text-white bg-indigo-600 hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out rounded-3xl hover:shadow-lg"
                  >
                    Register
                  </button>
                </div>

                <div className="text-sm text-center text-gray-400 capitalize">
                  By clicking register you agree to the
                  <Link to="#">Term Of Service</Link>
                  and
                  <Link to="#">Privacy Policy</Link>
                  including
                  <Link to="#">Cookie use</Link>
                </div>
                <div className="text-sm text-center text-gray-400 capitalize mt-2">
                  have an account already?
                  <Link
                    to="/SignIn"
                    className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
                  >
                    Log in
                  </Link>
                  .
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
