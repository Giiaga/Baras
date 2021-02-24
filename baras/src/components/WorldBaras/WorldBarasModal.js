import React, { useState } from "react";
import renderModalWorldBaras from "./renderModalWorldBaras";

function WorldBarasModal({ modalBaras, setBarasModal }) {
  return (
    <>
      <button
        className="closeButtonWorldBarasModal"
        onClick={() => setBarasModal()}
      >
        <i className="fas fa-times"></i>
      </button>
      <div>{renderModalWorldBaras(modalBaras)}</div>
    </>
  );
}

export default WorldBarasModal;
