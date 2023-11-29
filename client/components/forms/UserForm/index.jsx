import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { authUser } from "../../../store/userSlice";
const UserForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(authUser(values));
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={{ login: "", email: "" }} onSubmit={onSubmit}>
      <Form>
        <span>login: </span>
        <label>
          <Field name="login" />
          <ErrorMessage name="login" />
        </label>
        <span>email: </span>
        <label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </label>
        <button type="submit">auth me</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
