import React, { useState } from "react";
import renderModalWorldBaras from "./renderModalWorldBaras";
import "./OnlyPhotoModal.css";
import Thoughts from "../../Thoughts/Thoughts";
import { Modal } from "../../../Modals/Modal";

function WorldBarasModal({ modalBaras, setBarasModal }) {
  let [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="closeButtonWorldBarasModal"
        onClick={() => setBarasModal()}
      >
        <i className="fas fa-times"></i>
      </button>
      <button onClick={() => setShowModal(true)}>Comments</button>
      <div>{renderModalWorldBaras(modalBaras)}</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} thoughts={showModal}>
          <Thoughts BarasId={modalBaras.id} />
        </Modal>
      )}
    </>
  );
}

export default WorldBarasModal;
