import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTrustBaras } from "../../store/trustBaras";
import renderTrustBaras from "./renderTrustBaras";
import { sayThought, getAllThoughts } from "../../store/thoughts";
import Thoughts from "../Thoughts/Thoughts";
import { Modal } from "../../Modals/Modal";
import "./TrustBaras.css";
import "./VideoOnlyTrustBaras.css";
import "./PhotoOnlyTrustBaras.css";
import "./TextOnlyTrustBaras.css";

function TrustBaras() {
  let trustBaras = useSelector((state) => state.TrustBaras.allTrustBaras);
  let userId = useSelector((state) => state.session.user);
  let [thoughtTextArea, setThoughtTextArea] = useState("");
  let [openModal, setOpenModal] = useState(false);
  let [currentBarasId, setCurrentBarasId] = useState();
  // let [thoughtAddedToDataBase, setThoughtAdded] = useState(false);
  let [trustBarasAvailable, setTrustBarasAvailable] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(getTrustBaras(userId.id)).then(
        (data) => data && setTrustBarasAvailable(true)
      );
    }
  }, [dispatch]);

  function shareThought(e, thoughtTextArea, userId, BarasId) {
    e.preventDefault();

    dispatch(sayThought(thoughtTextArea, userId.id, BarasId))
      .then((data) => {
        if (data) setThoughtTextArea("");
        // thoughtAddedToDataBase ? setThoughtAdded(false) : setThoughtAdded(true);
      })
      .then(() =>
        dispatch(getAllThoughts(BarasId)).then(() => setOpenModal(true))
      );
  }
  return (
    <>
      <div className="TrustBarasHeading">
        <h3>Trust Baras</h3>
      </div>
      <div className="trustBarasMainDiv">
        {trustBarasAvailable &&
          renderTrustBaras(trustBaras).map((eachBaras, i) => (
            <>
              <div>
                <div className="onlyTextTrustBarasDiv">
                  {eachBaras[1]}
                  <div className="thoughtsTextarea">
                    <textarea
                      placeholder="What do you think?"
                      value={thoughtTextArea}
                      onClick={() => setCurrentBarasId(eachBaras[0].id)}
                      onChange={(e) => setThoughtTextArea(e.target.value)}
                    ></textarea>
                    <button
                      style={{
                        height: "75px",
                        width: "120px",
                        borderBottomRightRadius: "4.7px",
                      }}
                      onClick={(e) => {
                        shareThought(
                          e,
                          thoughtTextArea,
                          userId.id,
                          currentBarasId
                        );
                      }}
                    >
                      Say
                    </button>
                  </div>
                </div>
              </div>
              {openModal && (
                <Modal
                  onClose={() => setOpenModal(false)}
                  openModalTrustBaras={openModal}
                >
                  <Thoughts BarasId={currentBarasId} />
                </Modal>
              )}
            </>
          ))}
      </div>
    </>
  );
}

export default TrustBaras;
