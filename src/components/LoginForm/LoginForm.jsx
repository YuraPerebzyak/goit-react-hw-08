import { ErrorMessage, Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { LoginUserSchema } from "../../utils/schemas";
import { loginUser } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(loginUser(values));
      actions.resetForm();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={LoginUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
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
          😜 Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
