import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";

import css from "./RegisterForm.module.css";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { RegisterUserSchema } from "../../utils/schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterUserSchema}
      onSubmit={handleSubmit}
    >
      <div className={css.container}>
        <h2 className={css.title}>Create Your Account</h2>
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name:</span>
            <Field
              type="text"
              name="name"
              className={css.input}
              placeholder="Please enter your name"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Email:</span>
            <Field
              type="text"
              name="email"
              className={css.input}
              placeholder="example.email@example.com"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Password:</span>
            <Field
              type="password"
              name="password"
              className={css.input}
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>
          <button type="submit" className={css.submitButton}>
            🚀 Register
          </button>
        </Form>
      </div>
    </Formik>
  );
};
