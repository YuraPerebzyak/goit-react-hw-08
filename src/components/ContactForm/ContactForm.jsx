import { Formik, Form, Field } from "formik";
import styles from "./ContactForm.module.css";
import { AddContactSchema } from "../../utils/schemas.js";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations.js";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    try {
      await dispatch(addContact(newContact)).unwrap();
      toast.success("Contact added successfully!");
    } catch (error) {
      toast.error(`Failed to add contact: ${error}`);
    }
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={AddContactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.row}>
            <label className={styles.text} htmlFor="name">
              Name:
            </label>
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="span"
            />
          </div>
          <div className={styles.row}>
            <label className={styles.text} htmlFor="number">
              Number:
            </label>
            <Field className={styles.input} type="text" name="number" />
            <ErrorMessage
              className={styles.error}
              name="number"
              component="span"
            />
          </div>
          <div className={styles.btnBox}>
            <button className={styles.btn} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactForm;
