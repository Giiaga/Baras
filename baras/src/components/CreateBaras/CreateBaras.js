import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { letBarasOut } from "../../store/createBaras";
import { useHistory } from "react-router-dom";
import "./CreateBaras.css";

function CreateBaras() {
  let userId = useSelector((state) => state.session.user);
  console.log(userId);
  let dispatch = useDispatch();
  let history = useHistory();

  let [relatesTo, setRelatesTo] = useState();
  let [mainText, setMainText] = useState(null);
  let [photo, setPhoto] = useState(null);
  let [audioLink, setAudioLink] = useState(null);
  let [videoLink, setVideoLink] = useState(null);
  let [privateBaras, setPrivate] = useState(false);
  let [trusted, setTrusted] = useState(true);

  let [audioChoosen, setAudioChoosen] = useState(true);
  let [videoChoosen, setVideoChoosen] = useState(true);
  let [photoChoosen, setPhotoChoosen] = useState(true);
  let [inputsChoosen, setInputsChoosen] = useState(true);
  let submitCreateBaras = (e) => {
    e.preventDefault();
    dispatch(
      letBarasOut(
        relatesTo,
        mainText,
        photo,
        audioLink,
        videoLink,
        userId.id,
        privateBaras,
        trusted
      )
    );
    history.push("/trust/baras");
  };

  let addPhoto = (data) => {
    let fileread = new FileReader();

    fileread.onload = (e) => {
      setPhoto(e.target.result);
    };

    fileread.readAsDataURL(data);
  };

  return (
    <>
      <div className="createBarasMain">
        <form
          className="barasForm"
          onSubmit={submitCreateBaras}
          style={{ display: "flex", flexDirection: "column", width: "20%" }}
        >
          <input
            id="relatesTo"
            type="text"
            required
            value={relatesTo}
            onChange={(e) => setRelatesTo(e.target.value)}
            placeholder="Relates to"
          />
          <div className="inputDataDiv" hidden={inputsChoosen}>
            <div className="inputDataInputs">
              <input
                id="addPhotoInput"
                style={{ width: "70%" }}
                type="file"
                hidden={photoChoosen}
                onChange={(e) => addPhoto(e.target.files[0])}
                placeholder="Photo"
              />
              <button
                className="photoInputClear"
                hidden={photoChoosen}
                type="button"
                onClick={() => {
                  document.getElementById("addPhotoInput").value = "";
                  setPhoto("");
                }}
              >
                <i class="fas fa-broom"></i>
              </button>
              <button
                className="photoInputCancel"
                hidden={photoChoosen}
                type="button"
                onClick={() => {
                  setPhotoChoosen(true);
                  setPhoto("");
                  setInputsChoosen(true);
                }}
              >
                <i class="fas fa-window-close"></i>{" "}
              </button>
            </div>
            <div className="inputDataInputs">
              <input
                type="text"
                className="audioInput"
                hidden={audioChoosen}
                value={audioLink}
                onChange={(e) => {
                  if (
                    e.target.value.length > 61 &&
                    e.target.value.length <= 1000
                  ) {
                    let found = e.target.value.indexOf("http");
                    let complete = e.target.value.indexOf("&auto");

                    let audioSoundcloudLink = e.target.value.slice(
                      found,
                      complete
                    );
                    setAudioLink(audioSoundcloudLink);
                  } else {
                    setAudioLink(e.target.value);
                  }
                }}
                placeholder="Put audio link here"
              />
              <button
                className="audioInputCancel"
                hidden={audioChoosen}
                type="button"
                onClick={() => {
                  setAudioChoosen(true);
                  setInputsChoosen(true);
                }}
              >
                <i class="fas fa-window-close"></i>{" "}
              </button>
            </div>

            <div className="inputDataInputs">
              <input
                className="videoInput"
                type="text"
                hidden={videoChoosen}
                placeholder="Put video link here"
                value={videoLink}
                onChange={(e) => {
                  if (e.target.value.length) {
                    let youtubeFindId = e.target.value.indexOf("v=");
                    let youtubePartUrl = e.target.value
                      .split()[0]
                      .substring(0, 24);
                    let youtubeId = e.target.value.slice(youtubeFindId + 2, 43);

                    setVideoLink(youtubePartUrl + "embed/" + youtubeId);
                  }

                  e.target.placeholder = "Please enter a complete url";
                }}
              />
              <button
                className="videoInputCancel"
                hidden={videoChoosen}
                type="button"
                onClick={() => {
                  setVideoChoosen(true);
                  setInputsChoosen(true);
                }}
              >
                <i class="fas fa-window-close"></i>{" "}
              </button>
            </div>
          </div>
          {photo && (
            <div>
              <img
                src={photo}
                alt={photo}
                style={{
                  width: "100%",
                  height: "200px",
                  margin: "auto",
                  marginTop: "4%",
                }}
              />
            </div>
          )}
          {audioLink && (
            <iframe
              style={{
                width: "300px",
                height: "100px",
                margin: "auto",
                marginTop: "4%",
              }}
              src={audioLink}
            ></iframe>
          )}
          {videoLink && (
            <iframe
              style={{
                width: "300px",
                height: "200px",
                margin: "auto",
                marginTop: "4%",
              }}
              src={videoLink}
            ></iframe>
          )}
          <textarea
            id="BarasTextArea"
            value={mainText}
            placeholder="Let it outt, if you will"
            onChange={(e) => setMainText(e.target.value)}
          ></textarea>
          <div style={{ alignSelf: "flex-end", marginTop: "1%" }}>
            <button
              type="button"
              style={{ color: "orange" }}
              className="addButtons"
              onClick={() => {
                setInputsChoosen(false);
                setPhotoChoosen(false);
                setAudioChoosen(true);
                setVideoChoosen(true);
                setAudioLink("");
                setVideoLink("");
              }}
            >
              <i class="fas fa-image"></i>{" "}
            </button>
            <button
              type="button"
              className="addButtons"
              style={{ color: "orange" }}
              onClick={() => {
                setInputsChoosen(false);

                setAudioChoosen(false);
                setPhotoChoosen(true);
                setVideoChoosen(true);
                setPhoto("");
                setVideoLink("");
              }}
            >
              <i class="fab fa-soundcloud"></i>{" "}
            </button>
            <button
              type="button"
              style={{ color: "orange" }}
              className="addButtons"
              onClick={() => {
                setInputsChoosen(false);

                setVideoChoosen(false);
                setPhotoChoosen(true);
                setAudioChoosen(true);
                setPhoto("");
                setAudioLink("");
              }}
            >
              <i class="fab fa-youtube"></i>{" "}
            </button>
          </div>
          <label id="privateBaras">
            Private{" "}
            <input
              type="checkbox"
              placeholder="Private"
              value={privateBaras}
              onClick={(e) =>
                privateBaras ? setPrivate(false) : setPrivate(true)
              }
            />
          </label>
          <label id="trustBaras">
            Trust{" "}
            <input
              type="checkbox"
              checked={trusted}
              placeholder="Trust"
              value={trusted}
              onClick={(e) => {
                trusted ? setTrusted(false) : setTrusted(true);
              }}
            />
          </label>
          <button id="letItOutButton">Let it out</button>
        </form>
      </div>
    </>
  );
}

export default CreateBaras;
