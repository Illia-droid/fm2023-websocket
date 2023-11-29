import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import { createMessage } from "../../../src/api";

const MessageForm = () => {
  const { user } = useSelector((store) => store.user);
  const onSubmit = (values, formikBag) => {
    values.userId = user?._id;
    createMessage(values);
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={{}} onSubmit={onSubmit}>
      <Form>
        <label>
          <Field name="content" />
          <ErrorMessage name="content" />
        </label>
        <button type="submit">auth me</button>
      </Form>
    </Formik>
  );
};

export default MessageForm;
