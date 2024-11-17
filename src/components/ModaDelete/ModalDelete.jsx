import css from "./ModalDelete.module.css";
const ModalDelete = ({ onConfirm, onCancel }) => {
  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <p>Are you sure you want to delete this contact?</p>
        <div className={css.modalButtons}>
          <button onClick={onConfirm} className={css.confirmButton}>
            Yes
          </button>
          <button onClick={onCancel} className={css.cancelButton}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
