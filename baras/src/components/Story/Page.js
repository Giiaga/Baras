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
  // if (SMFH) {
  //   console.log(moving == true);
  //   dragElement(moving);
  //   // setMove(false);
  // }
  // console.log(moving, "WHEN");
  let newPageNum = useSelector((state) => state.storyPages);

  let saveStory = () => {};
  if (SMFH) dragElement(document.getElementById("dragWrite"));
  function dragElement(elmnt) {
    let setWidth = elmnt.getBoundingClientRect().width;
    let saved = setWidth;
    let savedd = saved;
    // console.log(elmnt.getBoundingClientRect());
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "main")) {
      document.getElementById(elmnt.id + "main").onmousedown = dragMouseDown;
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
    //bottom: 1166.5166931152344
    // height: 1124.6500244140625;
    // left: 444.2166748046875;
    // right: 1240.050048828125;
    // top: 41.866668701171875;
    // width: 795.8333740234375;
    // x: 444.2166748046875;
    // y: 41.866668701171875;
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      if (elmnt.offsetLeft - pos1 >= 780) {
        elmnt.style.left = 780.5 + "px";
        // elmnt.style.width = 3 + "mm";
        // elmnt.style.maxWidth = 3 + "mm";
      } else if (elmnt.offsetLeft - pos1 < 0) {
        elmnt.style.left = 0 + "px";
        // elmnt.style.maxWidth = 10 + "px";
      } else {
        //780.5 - width the remainder if it reaches then subtract the remainder - 780.5 and whatever is the reainder is the wdith
        let remainderOffset = 780.5 - elmnt.getBoundingClientRect().width;
        // console.log(saved, "saved", savedd, "savedd");
        // console.log(remainderOffset, 'WDITH NOW"');
        // console.log(, "REMAINDER"); //if the offleft reaches that point subtract it from 70.5 and make it the width
        if (elmnt.offsetLeft >= remainderOffset) {
          let remainderleft = 780.5 - elmnt.offsetLeft;
          elmnt.style.maxWidth = remainderleft + "px";
          elmnt.style.minWidth = 5 + "px";
          elmnt.style.width = remainderleft + "px";
        } else if (elmnt.offsetLeft <= remainderOffset) {
          elmnt.style.width =
            saved > remainderOffset ? remainderOffset + "px" : saved + "px";
          elmnt.style.maxWidth =
            209.5 > remainderOffset ? remainderOffset + "px" : 209.5 + "mm";
          // elmnt.style.minWidth = remainderOffset + "mm";
        }
        // elmnt.style.width = 150 + "px";

        // elmnt.style.maxWidth = 209.5 + "mm";

        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }
      // console.log("side", elmnt.style.left);
      // elmnt.style.left = "500px";
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
          <>
            <div
              id="dragWrite"
              style={{
                position: "absolute",
                resize: "both",
                overflow: "auto",
                overflowX: "hidden",
                overflowY: "hidden",
                maxWidth: "209.5mm",
                maxHeight: "295.5mm",
                heigh: "150px",
                width: "150px",
                border: "1px solid",
              }}
            >
              <div
                id="dragWritemain"
                style={{
                  height: "13px",
                  margin: "0",
                  padding: "0",
                  cursor: "move",
                  color: "transparent",
                }}
                onMouseDown={(e) => {
                  dragElement(document.getElementById("dragWrite"));
                }}
              >
                yes
              </div>
              <textarea
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "209.5mm",
                  maxHeight: "295.5mm",
                  resize: "none",
                  border: "none",
                }}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
          </>
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
