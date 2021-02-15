import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Page.css";

function Page() {
  let storyId = useSelector((state) => state.story.id);
  let [audioChoosen, setAudioChoosen] = useState(true);
  let [videoChoosen, setVideoChoosen] = useState(true);
  let [photoChoosen, setPhotoChoosen] = useState(true);
  let [photo, setPhoto] = useState(null);
  let [audioLink, setAudioLink] = useState(null);
  let [videoLink, setVideoLink] = useState(null);
  let [showPhoto, setShowPhoto] = useState();
  let [pageNumber, setPageNumber] = useState();
  let [write, setWrite] = useState();
  let [text, setText] = useState();
  let [chapter, setChapter] = useState();
  let [chapterInput, setShowChapterInput] = useState(false);

  let newPageNum = useSelector((state) => state.storyPages);

  let saveStory = () => {};

  function dragElement(elmnt) {
    let setWidth = elmnt.getBoundingClientRect().width;
    let setHeight = elmnt.getBoundingClientRect().height;
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
          elmnt.style.height = heightOffset - pos1 + "px";
          elmnt.style.maxHeight = heightOffset + pos1 + "px";
        } else {
          elmnt.style.height = setHeight;
          elmnt.style.maxHeight = 1116.86 - elmnt.offsetTop + pos1 + "px";
        }
      } else if (elmnt.offsetTop - pos1 <= 0) {
        elmnt.style.top = 0 + "px";
        let heightOffset = 1116.86 - elmnt.offsetTop;
        if (setHeight > heightOffset) {
          elmnt.style.height = heightOffset + pos1 + "px";
          elmnt.style.maxHeight = heightOffset + pos1 + "px";
        } else {
          elmnt.style.height = setHeight;
          elmnt.style.maxHeight = 1116.86 - elmnt.offsetTop + 1 + "px";
        }
      } else if (elmnt.offsetTop - pos1 <= 1116.86) {
        let heightOffset = 1116.86 - elmnt.offsetTop;
        if (setHeight > heightOffset) {
          elmnt.style.height = heightOffset - pos1 + "px";
          elmnt.style.maxHeight = heightOffset + pos1 + "px";
        } else {
          elmnt.style.height = setHeight;
          elmnt.style.maxHeight = 1116.86 - elmnt.offsetTop + pos1 + "px";
        }
      }

      if (elmnt.offsetLeft - pos1 >= 790) {
        elmnt.style.left = 791 + "px";
        let offset = 792 - elmnt.offsetLeft;
        if (setWidth > offset) {
          elmnt.style.width = offset - pos1 + "px";
          elmnt.style.maxWidth = offset + pos1 + "px";
        } else {
          elmnt.style.width = setWidth;
          elmnt.style.maxWidth = 792 - elmnt.offsetLeft + pos1 + "px";
        }
      } else if (elmnt.offsetLeft - pos1 <= 0) {
        elmnt.style.left = -1 + "px";
        let offset = 792 - elmnt.offsetLeft;
        if (setWidth > offset) {
          elmnt.style.width = offset + pos1 + "px";
          elmnt.style.maxWidth = offset + pos1 + "px";
        } else {
          elmnt.style.width = setWidth;
          elmnt.style.maxWidth = 792 - elmnt.offsetLeft + 1 + "px";
        }
      } else if (elmnt.offsetLeft - pos1 <= 790) {
        let offset = 793 - elmnt.offsetLeft;
        if (setWidth > offset) {
          elmnt.style.width = offset - pos1 + "px";
          elmnt.style.maxWidth = offset + pos1 + "px";
        } else {
          elmnt.style.width = setWidth;
          elmnt.style.maxWidth = 793 - elmnt.offsetLeft + pos1 + "px";
        }
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }
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
        }}
      >
        Add Photo
      </button>
      <button
        onClick={() => {
          setAudioChoosen(false);
          setPhotoChoosen(true);
          setVideoChoosen(true);
        }}
      >
        Add Song
      </button>
      <button
        onClick={() => {
          setVideoChoosen(false);
          setPhotoChoosen(true);
          setAudioChoosen(true);
        }}
      >
        Add Video
      </button>
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
          }}
        >
          Cancel
        </button>
      </div>
      <button onClick={() => setWrite(true)}>Write</button>
      <button onClick={() => setShowChapterInput(true)}>Add Chapter</button>
      {chapterInput && (
        <>
          <input
            type="text"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
          />
          <button
            onClick={() => {
              setShowChapterInput(false);
              setChapter("");
            }}
          >
            Cancel
          </button>
        </>
      )}
      {write && <button onClick={() => setWrite(false)}>Cancel</button>}
      <button onClick={""}>Save</button>
      <button
        onClick={(e) => {
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

              <iframe
                style={{ width: "100%", height: "100%" }}
                src={videoLink}
              ></iframe>
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
          }}
        >
          <div
            id="audioShowmain"
            style={{
              height: "3px",
              margin: "0",
              padding: "0",
              cursor: "move",
            }}
            onMouseDown={(e) => {
              dragElement(document.getElementById("audioShow"));
            }}
          ></div>
          {audioLink && (
            <iframe
              style={{ width: "100%", height: "100%" }}
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
                }}
                onMouseDown={(e) => {
                  dragElement(document.getElementById("dragWrite"));
                }}
              ></div>
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
        {chapter && (
          <div
            id="showChapter"
            style={{
              position: "absolute",
              minWidth: "0",
              maxWidth: "210mm",
              maxHeight: "1102px",
              resize: "both",
              overflow: "auto",
              overflowY: "hidden",
              overflowX: "hidden",
            }}
          >
            <div
              id="showChaptermain"
              style={{
                height: "3px",
                margin: "0",
                padding: "0",
                cursor: "move",
              }}
              onMouseDown={(e) => {
                dragElement(document.getElementById("showChapter"));
              }}
            ></div>
            <h1
              style={{
                height: "100%",
                width: "100%",
                fontSize: "4vw",
                margin: "0",
                wordBreak: "break-word",
              }}
            >
              {chapter}
            </h1>
          </div>
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
              }}
            />
          </div>
        ) : (
          ""
        )}
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
