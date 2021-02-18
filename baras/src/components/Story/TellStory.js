import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../Modals/Modal";
import { tellStory } from "../../store/story";

function TellStory({ title, setTellStory }) {
  let history = useHistory();
  let dispatch = useDispatch();

  let user = useSelector((state) => state.session.user);

  let [trustShare, setTrustShare] = useState(false);
  let [worldShare, setWorldShare] = useState(true);
  let [selfShare, setSelfShare] = useState(false);
  let [published, setPublished] = useState(false);
  let [timing, setTiming] = useState(5);
  function tellTheStory(e) {
    e.preventDefault();

    dispatch(
      tellStory(user.id, title, true, worldShare, trustShare, selfShare)
    ).then((data) => data && setPublished(true));
  }

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
      if ((worldShare && trustShare) || worldShare) {
      } else {
        if (selfShare) {
          setSelfShare(false);
        } else setSelfShare(true);
      }
    }
  }

  function time() {
    let numb = 6;
    let clear = setInterval(() => {
      setTiming(timing - 1);
    }, 1000);
    if (timing === 0) {
      clearInterval(clear);
     return history.push(`/story/${title}`);
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
              onClick={(e) => {
                tellTheStory(e);
              }}
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
            <h1>
              "{title}" by <small>{user.username}</small> has been published to
              your wishes.
            </h1>
            <p>You are Life! Don't ever forget that</p>
            <small>{timing}</small>
          </>
        )}
      </Modal>
    </>
  );
}

export default TellStory;
