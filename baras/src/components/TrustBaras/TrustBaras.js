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
  let userId = useSelector((state) => state.session.user.id);
  let [thoughtTextArea, setThoughtTextArea] = useState("");
  let [openModal, setOpenModal] = useState(false);
  // let [thoughtAddedToDataBase, setThoughtAdded] = useState(false);
  let [trustBarasAvailable, setTrustBarasAvailable] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrustBaras(userId)).then(
      (data) => data && setTrustBarasAvailable(true)
    );
  }, [dispatch]);

  function shareThought(e, thoughtTextArea, userId, BarasId) {
    e.preventDefault();
    dispatch(sayThought(thoughtTextArea, userId, BarasId)).then((data) => {
      if (data) setThoughtTextArea("");
      // thoughtAddedToDataBase ? setThoughtAdded(false) : setThoughtAdded(true);
    });
    console.log("up", BarasId);
    dispatch(getAllThoughts(BarasId)).then(() => setOpenModal(true));
  }

  return (
    <>
      <div className="TrustBarasHeading">
        <h3>Trust Baras</h3>
      </div>
      <div className="trustBarasMainDiv">
        {trustBarasAvailable &&
          renderTrustBaras(
            trustBaras,
            thoughtTextArea,
            setThoughtTextArea,
            shareThought,
            userId
          ).map((eachBaras) => (
            <>
              <div>
                <div className="onlyTextTrustBarasDiv">
                  {eachBaras[1]}
                  <div className="thoughtsTextarea">
                    <textarea
                      placeholder="What do you think?"
                      value={thoughtTextArea}
                      onChange={(e) => setThoughtTextArea(e.target.value)}
                    ></textarea>
                    <button
                      style={{
                        height: "75px",
                        width: "120px",
                        borderBottomRightRadius: "4.7px",
                      }}
                      onClick={(e) =>
                        shareThought(e, thoughtTextArea, userId, eachBaras.id)
                      }
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
                  <Thoughts BarasId={eachBaras[0].id} />
                </Modal>
              )}
            </>
          ))}
      </div>
    </>
  );
}

export default TrustBaras;
