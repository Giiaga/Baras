import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorldBaras } from "../../store/worldBaras";
import renderWorldBaras from "./renderWorldBarasFunction";
import { Modal } from "../../Modals/Modal";
import WorldBarasModal from "./ModalWorldBaras/WorldBarasModal";

import "./WorldBaras.css";
import "./OnlyPhoto.css";
import "./OnlyVideo.css";
import "./OnlyMusic.css";
import "./OnlyText.css";
import Search from "../Search/Search";

function WorldBaras(props) {
  let worldBaras = useSelector((state) => state.worldBaras.worldBaras);
  let [worldBarasAvailable, setWorldBarasAvailable] = useState(false);
  let [modalBaras, setBarasModal] = useState();
  let [testing, setTest] = useState(false);
  // let [setBarasModalMain, setBarasModalMainSize] = useState(false);

  let dispatch = useDispatch();
  if (modalBaras) console.log(modalBaras, modalBaras.id, "id");
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
      <Search style={{ position: "absolute", top: "0%", left: "50%" }} />
      <div className="worldBarasMainDiv">
        {worldBarasAvailable &&
          renderWorldBaras(worldBaras).map((eachBaras, i) => (
            <div
              key={
                eachBaras[1].props.children[0].props.children.props.children + i
              }
              className="eachWorldBarasMainDiv"
              onClick={() => {
                setBarasModal(eachBaras[0]);
                setTest(true);
              }}
            >
              {eachBaras[1]}
            </div>
          ))}
      </div>
      {modalBaras && (
        <Modal test={testing}>
          <WorldBarasModal
            modalBaras={modalBaras}
            setBarasModal={setBarasModal}
          />
        </Modal>
      )}
    </>
  );
}

export default WorldBaras;
