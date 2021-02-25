import React, { useState } from "react";
import renderModalWorldBaras from "./renderModalWorldBaras";
import "./OnlyPhotoModal.css";
import Thoughts from "../../Thoughts/Thoughts";

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
      <Thoughts BarasId={modalBaras.id} />
    </>
  );
}

export default WorldBarasModal;
