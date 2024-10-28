import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) {
    console.error("Что то не работает.");
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;
