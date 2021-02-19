import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children, login }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div
      id="modal"
      style={
        login && {
          left: "-70%",
          top: "-45%",
        }
      }
    >
      <div id="modal-background" onClick={onClose} />
      <div
        id="modal-content"
        style={
          login && { backgroundColor: "orange", borderBottom: "4px solid" }
        }
      >
        {children}
      </div>
    </div>,
    modalNode
  );
}
