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
          <>
            <h1>Do you want to publish this?</h1>
            <label>
              Yes, share with the world!
              <input
                type="checkbox"
                id="worldShare"
                checked={worldShare}
                onChange={checkOrNot}
              />
            </label>
            <label>
              Yes, Trusted only
              <input
                type="checkbox"
                id="trustShare"
                checked={trustShare}
                onChange={checkOrNot}
              />
            </label>
            <label>
              For me only
              <input
                type="checkbox"
                id="selfShare"
                checked={selfShare}
                onChange={checkOrNot}
              />
            </label>
            <button type="button" onClick={() => setPublished(true)}>
              Let it out^
            </button>
          </>
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
