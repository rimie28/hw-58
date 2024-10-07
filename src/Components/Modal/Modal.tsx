import Backdrop from "../Backdrop/Backdrop.tsx";
import React from "react";

interface Props {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ show, onClose }) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <div className="modal show" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modal title</h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            Modal Content
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
