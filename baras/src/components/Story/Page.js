import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Page.css";
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
  // let [showAudio, setShowAudio] = useState();
  // let [showVideo, setShowVideo] = useState();
  let [pageNumber, setPageNumber] = useState();
  let [write, setWrite] = useState();
  let [text, setText] = useState();
  // let [moving, setMove] = useState(false);
  // console.log(videoLink, "vifdj");
  // let [SMFH, setSMFH] = useState(false);
  // if (SMFH) {
  //   console.log(moving == true);
  //   dragElement(moving);
  //   // setMove(false);
  // }
  // console.log(moving, "WHEN");
  let newPageNum = useSelector((state) => state.storyPages);

  let saveStory = () => {};
  // if (SMFH) dragElement(document.getElementById("dragWrite"));
  function dragElement(elmnt) {
    let setWidth = elmnt.getBoundingClientRect().width;
    let setHeight = elmnt.getBoundingClientRect().height;
    // let setWidth = setWidth;
    // let setWidthd = setWidth;
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

      if (elmnt.offsetTop - pos1 >= 1116.86) {
        elmnt.style.top = 1116.96 + "px";

        let heightOffset = 1116.86 - elmnt.offsetTop;

        if (setHeight > heightOffset) {
          // console.log(offset);
          elmnt.style.height = heightOffset - pos1 + "px";
          elmnt.style.maxHeight = heightOffset + pos1 + "px";
        } else {
          elmnt.style.height = setHeight;
          elmnt.style.maxHeight = 1116.86 - elmnt.offsetTop + pos1 + "px";
          // 792 > elmnt.offsetLeft ? 792 - elmnt.offsetLeft + "px" : 792 + "px";/
        }
      } else if (elmnt.offsetTop - pos1 <= 0) {
        elmnt.style.top = 0 + "px";
        let heightOffset = 1116.86 - elmnt.offsetTop;
        // console.log("setWidth", setWidth);
        if (setHeight > heightOffset) {
          // console.log(offset, "offset in Else");
          elmnt.style.height = heightOffset + pos1 + "px";
          elmnt.style.maxHeight = heightOffset + pos1 + "px";
          // console.log(pos1, "pos1 in save great");
        } else {
          elmnt.style.height = setHeight;
          elmnt.style.maxHeight = 1116.86 - elmnt.offsetTop + 1 + "px";
          // console.log(pos1, "pos1 in less");

          // console.log(792 - elmnt.offsetLeft, "offsetLEFT");
        }
      } else if (
        elmnt.offsetTop - pos1 <=
        1116.86
        // elmnt.offsetLeft - pos1 > 0
      ) {
        let heightOffset = 1116.86 - elmnt.offsetTop;
        // console.log("setWidth", setWidth);
        if (setHeight > heightOffset) {
          // console.log(offset, "offset in Else");
          elmnt.style.height = heightOffset - pos1 + "px";
          elmnt.style.maxHeight = heightOffset + pos1 + "px";
        } else {
          elmnt.style.height = setHeight;
          elmnt.style.maxHeight = 1116.86 - elmnt.offsetTop + pos1 + "px";
          // console.log(792 - elmnt.offsetLeft, "offsetLEFT");
        }
      }

      if (elmnt.offsetLeft - pos1 >= 790) {
        elmnt.style.left = 791 + "px";
        // elmnt.style.width = 3 + "mm";
        // elmnt.style.maxWidth = 3 + "mm";
        // let remainderOffset = 790 - elmnt.getBoundingClientRect().width;

        // console.log("MAX OFFSET", elmnt.offsetLeft);

        // let remainderleft = 790 - elmnt.offsetLeft;
        //830
        let offset = 792 - elmnt.offsetLeft;
        if (setWidth > offset) {
          console.log(offset);
          elmnt.style.width = offset - pos1 + "px";
          elmnt.style.maxWidth = offset + pos1 + "px";
        } else {
          elmnt.style.width = setWidth;
          elmnt.style.maxWidth = 792 - elmnt.offsetLeft + pos1 + "px";
          // 792 > elmnt.offsetLeft ? 792 - elmnt.offsetLeft + "px" : 792 + "px";/
        }

        // if (elmnt.offsetLeft > remainderOffset) {
        //   elmnt.style.maxWidth = remainderleft + "px";
        //   elmnt.style.minWidth = 0 + "px";
        //   elmnt.style.width = setWidth + "mm";
        // } else if (elmnt.offsetLeft <= remainderOffset) {
        //   elmnt.style.minWidth = 0 + "px";

        //   elmnt.style.width =
        //     setWidth > remainderleft
        //       ? 790 - elmnt.offsetLeft + "mm"
        //       : setWidth + "mm";
        //   elmnt.style.maxWidth = 790 - elmnt.offsetLeft + 5 + "px";

        //   // elmnt.style.minWidth = remainderOffset + "mm";
        // }
      } else if (elmnt.offsetLeft - pos1 <= 0) {
        elmnt.style.left = -1 + "px";
        let offset = 792 - elmnt.offsetLeft;
        // console.log("setWidth", setWidth);
        if (setWidth > offset) {
          console.log(offset, "offset in Else");
          elmnt.style.width = offset + pos1 + "px";
          elmnt.style.maxWidth = offset + pos1 + "px";
          // console.log(pos1, "pos1 in save great");
        } else {
          elmnt.style.width = setWidth;
          elmnt.style.maxWidth = 792 - elmnt.offsetLeft + 1 + "px";
          // console.log(pos1, "pos1 in less");

          console.log(792 - elmnt.offsetLeft, "offsetLEFT");
        }
        // elmnt.style.maxWidth = 10 + "px";
      } else if (
        elmnt.offsetLeft - pos1 <=
        790
        // elmnt.offsetLeft - pos1 > 0
      ) {
        let offset = 793 - elmnt.offsetLeft;
        console.log("setWidth", setWidth);
        if (setWidth > offset) {
          console.log(offset, "offset in Else");
          elmnt.style.width = offset - pos1 + "px";
          elmnt.style.maxWidth = offset + pos1 + "px";
        } else {
          elmnt.style.width = setWidth;
          elmnt.style.maxWidth = 793 - elmnt.offsetLeft + pos1 + "px";
          // console.log(792 - elmnt.offsetLeft, "offsetLEFT");
        }
        // let remainderOffset = 790 - elmnt.getBoundingClientRect().width;

        // console.log("MAX OFFSET", elmnt.offsetLeft);

        // let remainderleft = 790 - elmnt.offsetLeft;
        // if (elmnt.offsetLeft > remainderOffset) {
        //   elmnt.style.maxWidth = remainderleft + "px";
        //   elmnt.style.minWidth = 0 + "px";
        //   elmnt.style.width = remainderleft + "mm";
        // } else if (elmnt.offsetLeft <= remainderOffset) {
        //   elmnt.style.minWidth = 0 + "px";

        //   elmnt.style.width =
        //     setWidth > remainderleft
        //       ? 790 - elmnt.offsetLeft + "mm"
        //       : saved + "mm";
        //   elmnt.style.maxWidth = 792 - elmnt.offsetLeft + "px";
        //   // elmnt.style.minWidth = remainderOffset + "mm";
        // }
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
      return;
    }
    if (document.onmouseup) return;
    return;
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
            setShowPhoto("");
          }}
        >
          Clear
        </button>
        <button
          hidden={photoChoosen}
          type="button"
          onClick={() => {
            setPhotoChoosen(true);
            setShowPhoto("");
            document.getElementById("addPhotoInput").value = "";
          }}
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
            if (e.target.value.length > 61 && e.target.value.length <= 1000) {
              let found = e.target.value.indexOf("http");
              let complete = e.target.value.indexOf("&auto");

              let audioSoundcloudLink = e.target.value.slice(found, complete);
              setAudioLink(audioSoundcloudLink);
            }
            // setShowAudio(e.target.value);
          }}
          placeholder="Put audio link here"
        />
        <button
          hidden={audioChoosen}
          type="button"
          onClick={() => {
            setAudioChoosen(true);
            setAudioLink("");
          }}
        >
          Cancel
        </button>
      </div>
      {/* {audioLink && (
          <audio controls src={audioLink}>
            Sorry, your browser does not support audio being used on here
          </audio>
        )} */}

      {/* <>
        {audioLink && (
          <iframe
            // width="100%"
            // height="166"
            // scrolling="no"
            // frameborder="no"
            // allow="autoplay"
            src={audioLink}
          ></iframe>
        )}
      </> */}

      <div>
        <input
          type="text"
          hidden={videoChoosen}
          placeholder="Put video link here"
          value={videoLink}
          onChange={(e) => {
            if (e.target.value.length) {
              let youtubeFindId = e.target.value.indexOf("v=");
              let youtubePartUrl = e.target.value.split()[0].substring(0, 24);
              let youtubeId = e.target.value.slice(youtubeFindId + 2, 43);

              setVideoLink(youtubePartUrl + "embed/" + youtubeId);
            }

            e.target.placeholder = "Please enter a complete url";
          }}
        />
        <button
          hidden={videoChoosen}
          type="button"
          onClick={() => {
            // setShowVideo();
            setVideoLink("");
          }}
        >
          Clear
        </button>
        <button
          hidden={videoChoosen}
          type="button"
          onClick={() => {
            setVideoChoosen(true);
            // setShowVideo();
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
      <button onClick={""}>Save</button>
      <button
        onClick={(e) => {
          // saveStory(e, );
          // setShowAudio("");
          // setShowVideo("");
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
        {videoLink && (
          <>
            <div
              id="videoPlayer"
              style={{
                position: "absolute",
                resize: "both",
                overflow: "auto",
                overflowX: "hidden",
                overflowY: "hidden",
                maxWidth: "209.5mm",
                maxHeight: "295.5mm",
                // heigh: "150px",
                // width: "150px",
                // border: "1px solid",
              }}
            >
              <div
                id="videoPlayermain"
                style={{
                  height: "13px",
                  margin: "0",
                  padding: "0",
                  cursor: "move",
                  color: "transparent",
                }}
              ></div>

              <iframe style={{ width: "100%", height: "100%" }} src={videoLink}>
                {/* Sorry, your browser does not support video being used on here */}
              </iframe>
            </div>
          </>
        )}
        <div
          id="audioShow"
          style={{
            position: "absolute",
            resize: "both",
            overflow: "auto",
            overflowX: "hidden",
            overflowY: "hidden",
            maxWidth: "209.5mm",
            maxHeight: "295.5mm",
            // heigh: "150px",
            // width: "150px",
            border: "1px solid",
          }}
        >
          <div
            id="audioShowmain"
            style={{
              height: "13px",
              margin: "0",
              padding: "0",
              cursor: "move",
              // color: "transparent",
            }}
            onMouseDown={(e) => {
              dragElement(document.getElementById("audioShow"));
            }}
          >
            {/* yes */}
          </div>
          {audioLink && (
            <iframe
              style={{ width: "100%", height: "100%" }}
              // width="100%"
              // height="166"
              // scrolling="no"
              // frameborder="no"
              // allow="autoplay"
              src={audioLink}
            ></iframe>
          )}
        </div>
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
                // heigh: "150px",
                // width: "150px",
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
                  // color: "transparent",
                }}
                onMouseDown={(e) => {
                  dragElement(document.getElementById("dragWrite"));
                }}
              >
                {/* yes */}
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
            id="showPhoto"
            style={{
              position: "absolute",
              minWidth: "0",
              height: "200px",
              width: "200px",
              maxWidth: "210mm",
              maxHeight: "1102px",
              resize: "both",
              overflow: "auto",
              overflowY: "hidden",
              // border: "5px solid",
            }}
          >
            <div
              id="showPhotomain"
              style={{
                height: "3px",
                margin: "0",
                padding: "0",
                cursor: "move",
                color: "transparent",
              }}
              onMouseDown={(e) => {
                dragElement(document.getElementById("showPhoto"));
              }}
            ></div>
            <img
              src={showPhoto}
              alt={showPhoto}
              style={{
                width: "100%",
                height: "100%",
                // resize: "both",
                // overflow: "auto",
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
