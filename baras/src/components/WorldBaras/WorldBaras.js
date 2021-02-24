import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorldBaras } from "../../store/worldBaras";
import renderWorldBaras from "./renderWorldBarasFunction";
import { Modal } from "../../Modals/Modal";
import WorldBarasModal from "./WorldBarasModal";

import "./WorldBaras.css";
import "./OnlyPhoto.css";
import "./OnlyVideo.css";
import "./OnlyMusic.css";
import "./OnlyText.css";

function WorldBaras(props) {
  let worldBaras = useSelector((state) => state.worldBaras.worldBaras);
  let [showModal, setShowModal] = useState(false);
  let [worldBarasAvailable, setWorldBarasAvailable] = useState(false);
  let [modalBaras, setBarasModal] = useState();

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorldBaras()).then(
      (data) => data.length && setWorldBarasAvailable(true)
    );
  }, [dispatch]);
  return (
    <>
      <div className="headingDivWorldBaras">
        <h1>World Baras</h1>
      </div>
      <div className="worldBarasMainDiv">
        {worldBarasAvailable &&
          renderWorldBaras(worldBaras).map((eachBaras, i) => (
            <div
              key={
                eachBaras[1].props.children[0].props.children.props.children + i
              }
              className="eachWorldBarasMainDiv"
              onClick={() => {
                // setShowModal(true);
                setBarasModal(eachBaras[0]);
              }}
            >
              {eachBaras[1]}
            </div>
          ))}
      </div>
      {modalBaras && (
        <Modal>
          <WorldBarasModal modalBaras={modalBaras} />
        </Modal>
      )}
    </>
  );
}

export default WorldBaras;
