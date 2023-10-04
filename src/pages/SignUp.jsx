import { Formik } from "formik";
import React from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { signUp } from "../app/slices/productSlice";

const SignUp = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("username must Required")
      .min(4, "too short at least 4 character")
      .max(50, "too long max 50 characte"),
    email: Yup.string()
      .email()
      .required("Required must email")
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "valid email required"
      ),
    password: Yup.string()
      .required("Required")
      .matches(/^(?=.*[!@#\$%\^&\*])/, "One Special Case Character")
      .matches(/^(?=.*[0-9])/, "One Number")
      .matches(/^(?=.*[A-Z])/, "One Uppercase")
      .matches(/^(?=.*[a-z])/, "One Lowercase")
      .min(8, "Must Contain 8 Characters"),
  });

  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.posts);

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await dispatch(signUp(values));
      navigate("/codsoft-ecom/");
    } catch (e) {
    }
  };

  return (
    <div>
      <h1 className="text-center mt-2">Sign Up</h1>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <div className="d-flex flex-column fs-3  align-items-center m-5">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && <h5>{errors.username}</h5>}
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <h5>{errors.email}</h5>}
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && <h5>{errors.password}</h5>}
            <button type="submit" disabled={!isValid} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
