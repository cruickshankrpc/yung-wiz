import { JSX } from "react";
import { useModal } from "../../context/ModalContext";
import { DatabaseList } from "../DatabaseList/DatabaseList";

const ModalLookup = {
  DatabaseModal: DatabaseList,
};

const ModalManager = () => {
  const { modal, closeModal } = useModal();

  if (!modal) return null;
  const Modal = ModalLookup[modal.name];

  return <Modal onClose={closeModal} {...modal.props} />;
};

export default ModalManager;
