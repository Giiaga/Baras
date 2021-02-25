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

export function Modal({ onClose, children, login, thoughts, test }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;
  function returnThis(login, thoughts) {
    if (login) return { backgroundColor: "orange", borderBottom: "4px solid" };
    if (thoughts)
      return {
        width: "700px",
        borderRadius: "10px",
        border: "1px solid orange",
      };
    if (test) return { width: "80%" };
  }
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
          returnThis(login, thoughts)
          // thoughts && {
          //   width: "700px",
          //   borderRadius: "10px",
          //   border: "1px solid orange",
          // })

          // thoughts
          //   ? {
          //       width: "700px",
          //       borderRadius: "10px",
          //       border: "1px solid orange",
          //     }
          //   : { width: "80%", border: "1px solid orange" })
        }
      >
        {children}
      </div>
    </div>,
    modalNode
  );
}
