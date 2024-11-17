import { useState } from "react";
import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations"; // Операція для оновлення
import ModalEdit from "../ModalEdit/ModalEdit";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedNumber, setUpdatedNumber] = useState(number);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateContact({ id, name: updatedName, number: updatedNumber }))
      .then(() => {
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Failed to update contact:", error);
      });
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <RiContactsFill className={styles.icon} />
        {name}
      </p>
      <p className={styles.text}>
        <FaPhone className={styles.icon} />
        {number}
      </p>
      <button className={styles.btn} onClick={() => setIsEditing(true)}>
        <MdEdit className={styles.icon} /> Edit
      </button>
      <button className={styles.btn_del} onClick={() => onDelete(id)}>
        <MdDelete className={styles.icon_del} /> Delete
      </button>

      {isEditing && (
        <ModalEdit onClose={() => setIsEditing(false)}>
          <div className={styles.modalContent}>
            <h2 className={styles.edit_title}>Edit Contact</h2>
            <label className={styles.label}>
              Name:
              <input
                className={styles.input}
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
            </label>
            <label className={styles.label}>
              Number:
              <input
                className={styles.input}
                type="text"
                value={updatedNumber}
                onChange={(e) => setUpdatedNumber(e.target.value)}
              />
            </label>
            <div className={styles.modalActions}>
              <button className={styles.btn_save} onClick={handleSave}>
                Save
              </button>
              <button
                className={styles.btn_cancel}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </ModalEdit>
      )}
    </div>
  );
};

export default Contact;
