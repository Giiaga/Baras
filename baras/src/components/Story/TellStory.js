import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "../../Modals/Modal";

function TellStory({ title, setTellStory }) {
  let history = useHistory();

  let [trustShare, setTrustShare] = useState(false);
  let [worldShare, setWorldShare] = useState(true);
  let [selfShare, setSelfShare] = useState(false);
  let [published, setPublished] = useState(false);

  function checkOrNot(e) {
    if (e.target.id === "trustShare") {
      if (trustShare) {
        setTrustShare(false);
      } else setTrustShare(true);
    } else if (e.target.id === "worldShare") {
      if (worldShare) {
        setWorldShare(false);
      } else setWorldShare(true);
    } else {
      if (selfShare) {
        setSelfShare(false);
      } else setSelfShare(true);
    }
  }

  return (
    <>
      <Modal onClose={() => setTellStory(false)}>
        {!published && (
          <div
            style={{
              height: "400px",
              width: "600px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <h1 style={{ marginLeft: "auto", marginRight: "auto" }}>
              Do you want to publish this?
            </h1>
            <div style={{ height: "20px", display: "flex" }}>
              <label
                style={{
                  marginLeft: "100px",
                  marginTop: "0",
                  fontSize: "large",
                }}
              >
                Yes, share with the world!{" "}
              </label>
              <input
                type="checkbox"
                id="worldShare"
                style={{
                  width: "18px",
                  height: "18px",
                  marginLeft: "10px",
                  marginBottom: "0",
                  alignSelf: "flex-end",
                }}
                checked={worldShare}
                onChange={checkOrNot}
              />
            </div>
            <div style={{ height: "20px", display: "flex" }}>
              <label
                style={{
                  marginLeft: "100px",
                  marginTop: "0",
                  fontSize: "large",
                }}
              >
                Yes, Trusted only
              </label>
              <input
                type="checkbox"
                id="trustShare"
                style={{
                  width: "18px",
                  height: "18px",
                  marginLeft: "10px",
                  marginBottom: "0",
                  alignSelf: "flex-end",
                }}
                checked={trustShare}
                onChange={checkOrNot}
              />
            </div>
            <div style={{ height: "20px", display: "flex" }}>
              <label
                style={{
                  marginLeft: "100px",
                  marginTop: "0",
                  fontSize: "large",
                }}
              >
                For Me only{" "}
              </label>
              <input
                type="checkbox"
                id="selfShare"
                style={{
                  width: "18px",
                  height: "18px",
                  marginLeft: "10px",
                  marginBottom: "0",
                  alignSelf: "flex-end",
                }}
                checked={selfShare}
                onChange={checkOrNot}
              />
            </div>

            <button
              type="button"
              onClick={() => setPublished(true)}
              style={{
                width: "70px",
                height: "40px",
                marginLeft: "auto",
                marginRight: "70px",
                marginBottom: "0",
              }}
            >
              Let it out
            </button>
          </div>
        )}
        {published && (
          <>
            <h1>No Words</h1>
          </>
        )}
      </Modal>
    </>
  );
}

export default TellStory;
