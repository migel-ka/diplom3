import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import NotFound from "../../pages/NotFound";

type Props={
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
    if(!isOpen) return null
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('portal-root')
    )
    
}

export default Modal;