import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import renderModalWorldBaras from "./renderModalWorldBaras";
import "./OnlyPhotoModal.css";
import Thoughts from "../../Thoughts/Thoughts";

import { sayThought } from "../../../store/thoughts";

import { Modal } from "../../../Modals/Modal";

function WorldBarasModal({ modalBaras, setBarasModal, setModalTrue }) {
  let [showModal, setShowModal] = useState(false);
  let [thoughtTextArea, setThoughtTextArea] = useState("");
  let [thoughtAddedToDataBase, setThoughtAdded] = useState(false);

  let userId = useSelector((state) => state.session.user.id);

  let dispatch = useDispatch();

  function shareThought(e, thoughtTextArea, userId, BarasId) {
    e.preventDefault();
    dispatch(sayThought(thoughtTextArea, userId, BarasId)).then((data) => {
      if (data)
        thoughtAddedToDataBase ? setThoughtAdded(false) : setThoughtAdded(true);
    });
    setThoughtTextArea("");
  }

  return (
    <>
      <button
        className="closeButtonWorldBarasModal"
        onClick={() => setBarasModal()}
      >
        <i className="fas fa-times"></i>
      </button>
      <div>{renderModalWorldBaras(modalBaras)}</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} thoughts={showModal}>
          <Thoughts BarasId={modalBaras.id} />
        </Modal>
      )}
      <button
        onClick={() => {
          setShowModal(true);
          // setModalTrue(false);
        }}
      >
        View All Thoughts
      </button>

      {/* THOUGHT */}
      <div className="thoughtsTextarea">
        <textarea
          placeholder="What do you think?"
          value={thoughtTextArea}
          onChange={(e) => setThoughtTextArea(e.target.value)}
        ></textarea>
        <button
          style={{ height: "75px" }}
          onClick={(e) =>
            shareThought(e, thoughtTextArea, userId, modalBaras.id)
          }
        >
          Say
        </button>
      </div>
    </>
  );
}

export default WorldBarasModal;
