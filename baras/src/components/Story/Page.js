import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
// import CreateStory from "./CreateStory";

function Page() {
  let storyId = useSelector((state) => state.story.id);
  let [audioChoosen, setAudioChoosen] = useState(true);
  let [videoChoosen, setVideoChoosen] = useState(true);
  let [photoChoosen, setPhotoChoosen] = useState(true);
  let [photo, setPhoto] = useState(null);
  let [audioLink, setAudioLink] = useState(null);
  let [videoLink, setVideoLink] = useState(null);
  let [showPhoto, setShowPhoto] = useState();
  let [showAudio, setShowAudio] = useState();
  let [showVideo, setShowVideo] = useState();
  let [pageNumber, setPageNumber] = useState();
  let [write, setWrite] = useState();
  let [text, setText] = useState();
  let [moving, setMove] = useState(false);
  let [SMFH, setSMFH] = useState(false);
  if (SMFH) {
    console.log(moving == true);
    dragElement(moving);
    // setMove(false);
  }
  // console.log(moving, "WHEN");
  let newPageNum = useSelector((state) => state.storyPages);

  let saveStory = () => {};

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id)) {
      document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();

      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;

      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  let addPhoto = (data) => {
    let fileread = new FileReader();

    fileread.onload = (e) => {
      setPhoto(e.target.result);
      setShowPhoto(e.target.result);
    };

    fileread.readAsDataURL(data);
  };

  return (
    <>
      <button
        onClick={() => {
          setPhotoChoosen(false);
          setAudioChoosen(true);
          setVideoChoosen(true);
          setAudioLink("");
          setVideoLink("");
        }}
      >
        Add Photo
      </button>
      <button
        onClick={() => {
          setAudioChoosen(false);
          setPhotoChoosen(true);
          setVideoChoosen(true);
          setPhoto("");
          setVideoLink("");
        }}
      >
        Add Song
      </button>
      <button
        onClick={() => {
          setVideoChoosen(false);
          setPhotoChoosen(true);
          setAudioChoosen(true);
          setPhoto("");
          setAudioLink("");
        }}
      >
        Add Video
      </button>
      {/* <form> */}
      <div>
        <input
          id="addPhotoInput"
          type="file"
          hidden={photoChoosen}
          onChange={(e) => addPhoto(e.target.files[0])}
          placeholder="Photo"
        />
        <button
          hidden={photoChoosen}
          type="button"
          onClick={() => {
            document.getElementById("addPhotoInput").value = "";
          }}
        >
          Clear
        </button>
        <button
          hidden={photoChoosen}
          type="button"
          onClick={() => setPhotoChoosen(true)}
        >
          Cancel
        </button>
      </div>
      <div>
        <input
          type="text"
          hidden={audioChoosen}
          value={audioLink}
          onChange={(e) => {
            setAudioLink(e.target.value);
            setShowAudio(e.target.value);
          }}
          placeholder="Put audio link here"
        />
        <button
          hidden={audioChoosen}
          type="button"
          onClick={() => setAudioChoosen(true)}
        >
          Cancel
        </button>
      </div>
      {/* {audioLink && (
          <audio controls src={audioLink}>
            Sorry, your browser does not support audio being used on here
          </audio>
        )} */}
      <div>
        <input
          type="text"
          hidden={videoChoosen}
          placeholder="Put video link here"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <button
          hidden={videoChoosen}
          type="button"
          onClick={() => {
            setVideoChoosen(true);
            setShowVideo();
          }}
        >
          Cancel
        </button>
      </div>
      {/* <CreateStory
        grabPhoto={setShowPhoto}
        grabAudio={setShowAudio}
        grabVideo={setShowVideo}
      /> */}
      <button onClick={() => setWrite(true)}>Write</button>
      {write && <button onClick={() => setWrite(false)}>Cancel</button>}
      <button onClick={() => setMove(false)}>Save</button>
      <button
        onClick={(e) => {
          // saveStory(e, );
          setShowAudio("");
          setShowVideo("");
          setShowPhoto("");
          setWrite(false);
        }}
      >
        New Page
      </button>
      <div
        // onClick={() => setMove(false)}
        className="pageMainDiv"
        style={{
          width: "210mm",
          height: "297mm",
          border: "1px solid",
          margin: "auto",
          position: "relative",
        }}
      >
        {write ? (
          <div
            id="dragWrite"
            style={{
              borderTop: "10px solid",
              resize: "both",
              // height: "",
              position: "absolute",
              overflow: "auto",
              overflowY: "hidden",
              overflowX: "hidden",
              backgroundColor: "purple",
            }}
            // draggable="true"
            // onClick={(e) => {
            //   setMove(e.target);
            // }}
            // onMouseUp={() => setMove(false)}
            onDoubleClick={(e) => {
              // SMFH ? setSMFH(false) : setSMFH(true);
              setMove(e.target);
            }}
            onMouseUp={() => setSMFH(false)}
            // onDragEnd={() => {
            //   setMove(false);
            //   console.log("egnf");
            // }}
            // onClick={(e) => setMove(false)}
          >
            <textarea
              style={{
                width: "100%",
                height: "100%",
                resize: "none",
                position: "relative",
              }}
              // onClick={() => {
              //   setMove(false);
              //   // console.log("this works", moving);
              // }}
              // onDoubleClick={(e) => {
              //   setMove(e.target);
              // }}
              // onMouseUp={() => setMove(false)}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
        ) : (
          ""
        )}
        {showPhoto ? (
          <div
            style={{
              minWidth: "0",
              height: "296.5mm",
              resize: "both",
              overflow: "auto",
              overflowY: "hidden",
            }}
          >
            {" "}
            <img
              src={showPhoto}
              alt={showPhoto}
              style={{
                width: "100%",
                height: "100%",
                resize: "both",
                overflow: "auto",
              }}
            />
          </div>
        ) : (
          ""
        )}
        {/* <textarea style={{ maxWidth: "208.5mm" }}></textarea> */}
        <button style={{ position: "absolute", top: "49%", left: "-8.9%" }}>
          Prev
        </button>

        <button
          style={{ position: "absolute", top: "50%", left: "100.3%" }}
          onClick={() => setPageNumber(pageNumber++)}
        >
          Next
        </button>
        <p style={{ position: "absolute", top: "97%", left: "87%" }}>
          PageNumber{pageNumber}
        </p>
      </div>
    </>
  );
}

export default Page;
