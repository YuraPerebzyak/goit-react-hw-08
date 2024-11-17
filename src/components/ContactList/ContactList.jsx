import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import ModalDelete from "../ModaDelete/ModalDelete";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDeleteContact = (contactId) => {
    setShowModal(true);
    setContactToDelete(contactId);
  };

  const confirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete))
        .then(() => {
          toast.success("Contact deleted successfully!");
        })
        .catch((error) => {
          toast.error("Failed to delete contact!");
        });
    }
    setShowModal(false);
    setContactToDelete(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setContactToDelete(null);
  };
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {filteredContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <Contact
              data={contact}
              onDelete={() => handleDeleteContact(contact.id)}
            />
          </li>
        ))}
      </ul>
      {showModal && (
        <ModalDelete onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactList;
