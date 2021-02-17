import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPages, storyPage, newPage } from "../../store/story";

import "./Page.css";

function Page() {
  let [audioChoosen, setAudioChoosen] = useState(true);
  let [videoChoosen, setVideoChoosen] = useState(true);
  let [photoChoosen, setPhotoChoosen] = useState(true);
  let [audioLink, setAudioLink] = useState("");
  let [videoLink, setVideoLink] = useState("");
  let [photo, setShowPhoto] = useState("");
  let [pageNumber, setPageNumber] = useState();
  let [write, setWrite] = useState("");
  let [chapter, setChapter] = useState("");
  let [chapterInput, setShowChapterInput] = useState(false);
  let [text, setText] = useState("");
  let [i, setChangePage] = useState();
  // HEIGHTS AND WIDTHS AND POSITIONS

  let [photoMeasures, setPhotoMeasures] = useState({});
  let [textMeasures, setTextMeasures] = useState({});
  let [chapterMeasures, setChapterMeasures] = useState({});
  let [audioMeasures, setAudioMeasures] = useState({});
  let [videoMeasures, setVideoMeasures] = useState({});
  let [error, setError] = useState(false);

  // THIS DECIDES WHETER NEWPAGE THUNK WILL DISPATCH OR STORYPAGE
  let [newPageDispatch, setNewPageDispatch] = useState(false);
  // HEIGHTS AND WIDTHS AND POSITIONS END

  let fromParam = useParams();
  let history = useHistory();
  let storyTitle = fromParam.title.split("<:>").join(" ");

  let allPages = useSelector((state) => state.story.allPages);
  let userId = useSelector((state) => state.session.user.id);

  let dispatch = useDispatch();

  useEffect(
    () =>
      dispatch(getPages(storyTitle, userId)).then((response) => {
        if (response.error) {
          return setError(true);
        } else {
          setPageNumber(response[response.length - 1].pageNumber);
          setChangePage(response.length - 1);
        }
      }),
    [dispatch]
  );
  useEffect(() => {
    if (i >= 0) {
      let allPagesData = allPages[i];
      setPageNumber(allPagesData.pageNumber);
      if (allPagesData.textH || allPagesData.text) {
        setText(allPagesData.text);
        setTextMeasures({
          width: allPagesData.textWidth,
          height: allPagesData.textHeight,
          textH: allPagesData.textH,
          textV: allPagesData.textV,
        });
        setWrite(true);
      } else {
        setWrite(false);
        setTextMeasures({});
        setText("");
      }
      if (allPagesData.music) {
        setAudioLink(allPagesData.music);
        setAudioMeasures({
          width: allPagesData.musicWidth,
          height: allPagesData.musicHeight,
          musicH: allPagesData.musicH,
          musicV: allPagesData.musicV,
        });
      } else {
        setAudioLink("");
        setAudioMeasures({});
      }
      if (allPagesData.photo) {
        setShowPhoto(allPagesData.photo);
        setPhotoMeasures({
          width: allPagesData.photoWidth,
          height: allPagesData.photoHeight,
          photoH: allPagesData.photoH,
          photoV: allPagesData.photoV,
        });
      } else {
        setShowPhoto("");
        setPhotoMeasures({});
        document.getElementById("addPhotoInput").value = "";
      }
      if (allPagesData.video) {
        setVideoLink(allPagesData.video);
        setVideoMeasures({
          width: allPagesData.videoWidth,
          height: allPagesData.videoHeight,
          videoH: allPagesData.videoH,
          videoV: allPagesData.videoV,
        });
      } else {
        setVideoLink("");
        setVideoMeasures({});
      }
      if (allPagesData.chapter) {
        setChapter(allPagesData.chapter);
        setChapterMeasures({
          width: allPagesData.chapterWidth,
          height: allPagesData.chapterHeight,
          chapterH: allPagesData.chapterH,
          chapterV: allPagesData.chapterV,
        });
      } else {
        setChapter("");
        setChapterMeasures({});
      }
    }
  }, [i]);

  let saveStory = (e) => {
    e.preventDefault();

    let textMeasures;
    let audioMeasures;
    let videoMeasures;
    let chapterMeasures;
    let photoMeasures;

    if (document.getElementById("dragWrite")) {
      let textElement = document
        .getElementById("dragWrite")
        .getBoundingClientRect();
      textMeasures = {
        width: textElement.width - 2,
        height: textElement.height - 2,
        textH: textElement.left - 392.65625,
        textV: textElement.top - 43,
      };
    } else {
      textMeasures = {
        width: null,
        height: null,
        textH: null,
        textV: null,
      };
    }
    if (document.getElementById("showPhoto")) {
      let photoElement = document
        .getElementById("showPhoto")
        .getBoundingClientRect();
      photoMeasures = {
        width: photoElement.width - 2,
        height: photoElement.height - 2,
        photoH: photoElement.left - 392.65625,
        photoV: photoElement.top - 43,
      };
    } else {
      photoMeasures = {
        width: null,
        height: null,
        photoH: null,
        photoV: null,
      };
    }
    if (document.getElementById("showChapter")) {
      let chapterElement = document
        .getElementById("showChapter")
        .getBoundingClientRect();
      chapterMeasures = {
        width: chapterElement.width,
        height: chapterElement.height,
        chapterH: chapterElement.left - 392.65625,
        chapterV: chapterElement.top - 43,
      };
    } else {
      chapterMeasures = {
        width: null,
        height: null,
        chapterH: null,
        chapterV: null,
      };
    }
    if (document.getElementById("audioShow")) {
      let audioElement = document
        .getElementById("audioShow")
        .getBoundingClientRect();
      audioMeasures = {
        width: audioElement.width - 2,
        height: audioElement.height - 2,
        musicH: audioElement.left - 392.65625,
        musicV: audioElement.top - 43,
      };
    } else {
      audioMeasures = {
        width: null,
        height: null,
        musicH: null,
        musicV: null,
      };
    }
    if (document.getElementById("videoPlayer")) {
      let videoElement = document
        .getElementById("videoPlayer")
        .getBoundingClientRect();
      videoMeasures = {
        width: videoElement.width - 2,
        height: videoElement.height - 2,
        videoH: videoElement.left - 392.65625,
        videoV: videoElement.top - 43,
      };
    } else {
      videoMeasures = {
        width: null,
        height: null,
        videoH: null,
        videoV: null,
      };
    }
    let sameChapter;
    if (!chapter) {
      sameChapter = allPages[allPages.length - 1].chapter;
    } else sameChapter = chapter;

    if (e.target.value == "newPage") {
      dispatch(
        newPage(
          userId,
          textMeasures,
          photoMeasures,
          audioMeasures,
          chapterMeasures,
          videoMeasures,
          storyTitle,
          photo,
          videoLink,
          audioLink,
          sameChapter,
          text,
          pageNumber
        )
      ).then((data) =>
        data && i < data.newPage.pageNumber - 2
          ? setChangePage(data.newPage.pageNumber - 1)
          : setChangePage(i + 1)
      );
      return;
    } else {
      dispatch(
        storyPage(
          userId,
          textMeasures,
          photoMeasures,
          audioMeasures,
          chapterMeasures,
          videoMeasures,
          storyTitle,
          photo,
          videoLink,
          audioLink,
          sameChapter,
          text,
          pageNumber
        )
      );
      return;
    }
  };

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
        elmnt.style.top = -1 + "px";
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
      setShowPhoto(e.target.result);
    };

    fileread.readAsDataURL(data);
  };
  // let [showButtons, setShowButtons] = useState(true);

  if (error)
    return (
      <div>
        <h1>
          STORY DOES NOT EXIST, CHECK THE SPELLING OR GO TO YOUR PROFILE AND
          ACCESS STORY FROM THERE AND WHILE YOURE AT IT THANK{" "}
          <a href="https://www.linkedin.com/in/josephalves/">JOE ALVES</a> CAUSE
          YOU WERE GOING TO BE REDIRECTED TO THE HOMEPAGE UNTIL I DECIDED TO
          GIVE "USER FRIENDLY MESSAGE" - JOE ALVES (MAYBE)
        </h1>
      </div>
    );
  return (
    <>
      <div
        className="addButtonDiv"
        onClick={() => {
          if (
            document.getElementById("allTheButtons").style.top ===
            -50 + "%"
          ) {
            document.getElementById("allTheButtons").style.top = 0 + "%";
          } else document.getElementById("allTheButtons").style.top = -50 + "%";
        }}
      >
        <i class="fas fa-feather add"></i>
      </div>
      {/* SHOW BUTTONS BUTTON */}
      <div
        className="allTheButtons"
        id="allTheButtons"
        style={{
          position: "absolute",
          top: "-50%",
          left: "75.5%",
          zIndex: "1",
        }}
      >
        <button id="firstButton" onClick={() => setShowChapterInput(true)}>
          Add Chapter
        </button>
        <button
          onClick={() => {
            setPhotoChoosen(false);
            // setAudioChoosen(true);
            // setVideoChoosen(true);
          }}
        >
          Add Photo
        </button>
        <button
          onClick={() => {
            setAudioChoosen(false);
            // setPhotoChoosen(true);
            // setVideoChoosen(true);
          }}
        >
          Add Song
        </button>
        <button
          onClick={() => {
            setVideoChoosen(false);
            // setPhotoChoosen(true);
            // setAudioChoosen(true);
          }}
        >
          Add Video
        </button>
        <button
          onClick={() => {
            setWrite(true);
          }}
        >
          Write
        </button>
        <button onClick={saveStory}>Save</button>
        <button
          value={"newPage"}
          onClick={(e) => {
            saveStory(e);
          }}
        >
          New Page
        </button>
      </div>

      {/* ALL INPUTS */}
      <div
        className="inputDiv"
        style={{
          position: "absolute",
          top: "5.8%",
          left: "5%",
          width: "255px",
        }}
      >
        <div>
          <input
            id="addPhotoInput"
            type="file"
            hidden={photoChoosen}
            style={{
              width: "178px",
              marginBottom: "5px",
              marginTop: "5px",
              marginLeft: "5px",
            }}
            onChange={(e) => addPhoto(e.target.files[0])}
            placeholder="Photo"
          />
          <button
            hidden={photoChoosen}
            className="clearButtons"
            style={{ marginLeft: "2px", marginRight: "2px" }}
            type="button"
            onClick={() => {
              document.getElementById("addPhotoInput").value = "";
              setShowPhoto("");
            }}
          >
            <i class="fas fa-broom"></i>
          </button>
          <button
            hidden={photoChoosen}
            type="button"
            className="cancelButtons"
            onClick={() => {
              setPhotoChoosen(true);
              setShowPhoto("");
              document.getElementById("addPhotoInput").value = "";
            }}
          >
            X
          </button>
        </div>
        <div>
          <input
            type="text"
            className="inputStyles"
            hidden={audioChoosen}
            style={{ width: "173px", marginTop: "5px", marginBottom: "5px" }}
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
            className="clearButtons"
            style={{ marginLeft: "2px", marginRight: "2px" }}
            type="button"
            onClick={() => {
              setAudioLink("");
            }}
          >
            <i class="fas fa-broom"></i>
          </button>
          <button
            hidden={audioChoosen}
            className="cancelButtons"
            type="button"
            onClick={() => {
              setAudioChoosen(true);
              setAudioLink("");
            }}
          >
            X
          </button>
        </div>
        <div>
          <input
            type="text"
            hidden={videoChoosen}
            className="inputStyles"
            placeholder="Put video link here"
            value={videoLink}
            style={{ width: "173px", marginTop: "5px", marginBottom: "5px" }}
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
            className="clearButtons"
            style={{ marginLeft: "2px", marginRight: "2px" }}
            type="button"
            onClick={() => {
              setVideoLink("");
            }}
          >
            <i class="fas fa-broom"></i>
          </button>
          <button
            hidden={videoChoosen}
            className="cancelButtons"
            type="button"
            onClick={() => {
              setVideoChoosen(true);
            }}
          >
            X
          </button>
        </div>
        {chapterInput && (
          <>
            <input
              className="inputStyles"
              style={{ width: "173px" }}
              type="text"
              value={chapter}
              maxLength="100"
              onChange={(e) => setChapter(e.target.value)}
              placeholder="Chapter"
            />
            <button
              className="clearButtons"
              style={{ marginLeft: "2px", marginRight: "2px" }}
              type="button"
              onClick={() => {
                setChapter("");
              }}
            >
              <i class="fas fa-broom"></i>
            </button>
            <button
              className="cancelButtons"
              onClick={() => {
                setShowChapterInput(false);
                setChapter("");
              }}
            >
              X
            </button>
          </>
        )}
      </div>
      {/* ALL BUTTONS */}
      {/* <button
        onClick={() => {
          setPhotoChoosen(false);
          setAudioChoosen(true);
          setVideoChoosen(true);
        }}
      >
        Add Photo
      </button> */}
      {/* <button
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
      </button> */}
      {/* <div>
        <input
          id="addPhotoInput"
          type="file"
          hidden={photoChoosen}
          style={{
            width: "182px",
            marginBottom: "5px",
            marginTop: "5px",
            marginLeft: "5px",
          }}
          onChange={(e) => addPhoto(e.target.files[0])}
          placeholder="Photo"
        />
        <button
          hidden={photoChoosen}
          className="clearButtons"
          style={{ marginLeft: "2px", marginRight: "2px" }}
          type="button"
          onClick={() => {
            document.getElementById("addPhotoInput").value = "";
            setShowPhoto("");
          }}
        >
          <i class="fas fa-broom"></i>
        </button>
        <button
          hidden={photoChoosen}
          type="button"
          className="cancelButtons"
          onClick={() => {
            setPhotoChoosen(true);
            setShowPhoto("");
            document.getElementById("addPhotoInput").value = "";
          }}
        >
          X
        </button>
      </div>
      <div>
        <input
          type="text"
          className="inputStyles"
          hidden={audioChoosen}
          style={{ width: "173px", marginTop: "5px", marginBottom: "5px" }}
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
          className="clearButtons"
          style={{ marginLeft: "2px", marginRight: "2px" }}
          type="button"
          onClick={() => {
            setAudioLink("");
          }}
        >
          <i class="fas fa-broom"></i>
        </button>
        <button
          hidden={audioChoosen}
          className="cancelButtons"
          type="button"
          onClick={() => {
            setAudioChoosen(true);
            setAudioLink("");
          }}
        >
          X
        </button>
      </div>
      <div>
        <input
          type="text"
          hidden={videoChoosen}
          className="inputStyles"
          placeholder="Put video link here"
          value={videoLink}
          style={{ width: "173px", marginTop: "5px", marginBottom: "5px" }}
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
          className="clearButtons"
          style={{ marginLeft: "2px", marginRight: "2px" }}
          type="button"
          onClick={() => {
            setVideoLink("");
          }}
        >
          <i class="fas fa-broom"></i>
        </button>
        <button
          hidden={videoChoosen}
          className="cancelButtons"
          type="button"
          onClick={() => {
            setVideoChoosen(true);
          }}
        >
          X
        </button>
      </div> */}
      {/* <button
        onClick={() => {
          setWrite(true);
          // let test = document.getElementById("dragWrite");
          // console.log(test);
          // .getBoundingClientRect().height;

          // setHeight(test);
        }}
      >
        Write
      </button> */}
      {write && (
        <div>
          Remove Write
          <button
            className="cancelButtons"
            // style={{
            //   position: "absolute",
            //   left: "81.5%",
            //   zIndex: "1",
            //   top: "16.38%",
            // }}
            onClick={() => {
              setWrite(false);
              setText("");
            }}
          >
            X
          </button>
        </div>
      )}
      {/* <button onClick={() => setShowChapterInput(true)}>Add Chapter</button> */}
      {/* {chapterInput && (
        <>
          <input
            className="inputStyles"
            type="text"
            value={chapter}
            maxLength="100"
            onChange={(e) => setChapter(e.target.value)}
            placeholder="Chapter"
          />
          <button
            className="cancelButtons"
            onClick={() => {
              setShowChapterInput(false);
              setChapter("");
            }}
          >
            X
          </button>
        </>
      )} */}
      {/* <button onClick={saveStory}>Save</button> */}
      {/* <button
        value={"newPage"}
        onClick={(e) => {
          // setShowPhoto("");
          // setWrite(false);
          // setNewPageDispatch(true);
          saveStory(e);
        }}
      >
        New Page
      </button> */}
      <div
        className="pageMainDiv"
        style={{
          width: "210mm",
          height: "297mm",
          border: "1px solid",
          margin: "auto",
          marginTop: "42px",
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
                width:
                  videoMeasures.width >= 0
                    ? videoMeasures.width + "px"
                    : "345px",
                height:
                  videoMeasures.height >= 0
                    ? videoMeasures.height + "px"
                    : "234px",
                left:
                  videoMeasures.videoH >= 0 || videoMeasures.videoH <= 0
                    ? videoMeasures.videoH + "px"
                    : "auto",
                top:
                  videoMeasures.videoV >= 0 || videoMeasures.videoV <= 0
                    ? videoMeasures.videoV + "px"
                    : "auto",
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
        {audioLink && (
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
              width:
                audioMeasures.width >= 0 ? audioMeasures.width + "px" : "auto",
              height:
                audioMeasures.height >= 0
                  ? audioMeasures.height + "px"
                  : "auto",
              left:
                audioMeasures.musicH >= 0 || audioMeasures.musicH <= 0
                  ? audioMeasures.musicH + "px"
                  : "auto",
              top:
                audioMeasures.musicV >= 0 || audioMeasures.musicV <= 0
                  ? audioMeasures.musicV + "px"
                  : "auto",
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

            <iframe
              style={{ width: "100%", height: "100%" }}
              src={audioLink}
            ></iframe>
          </div>
        )}
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
                width:
                  textMeasures.width >= 0 ? textMeasures.width + "px" : "auto",
                height:
                  textMeasures.height >= 0
                    ? textMeasures.height + "px"
                    : "auto",
                left:
                  textMeasures.textH >= 0 || textMeasures.textH <= 0
                    ? textMeasures.textH + "px"
                    : "auto",
                top:
                  textMeasures.textV >= 0 || textMeasures.textV <= 0
                    ? textMeasures.textV + "px"
                    : "auto",
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
                value={text}
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
              width:
                chapterMeasures.width >= 0
                  ? chapterMeasures.width + "px"
                  : "auto",
              height:
                chapterMeasures.height >= 0
                  ? chapterMeasures.height + "px"
                  : "auto",
              left:
                chapterMeasures.chapterH >= 0 || chapterMeasures.chapterH <= 0
                  ? chapterMeasures.chapterH + "px"
                  : "auto",
              top:
                chapterMeasures.chapterV >= 0 || chapterMeasures.chapterV <= 0
                  ? chapterMeasures.chapterV + "px"
                  : "auto",
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
                fontSize: "3vw",
                margin: "0",
                wordBreak: "break-word",
              }}
            >
              {chapter}
            </h1>
          </div>
        )}
        {photo ? (
          <div
            id="showPhoto"
            style={{
              position: "absolute",
              minWidth: "0",
              maxWidth: "210mm",
              maxHeight: "1102px",
              resize: "both",
              overflow: "auto",
              overflowY: "hidden",
              width:
                photoMeasures.width >= 0 || photoMeasures.width <= 0
                  ? photoMeasures.width + "px"
                  : "200px",
              height:
                photoMeasures.height >= 0 || photoMeasures.height <= 0
                  ? photoMeasures.height + "px"
                  : "200px",
              left:
                photoMeasures.photoH >= 0 || photoMeasures.photoH <= 0
                  ? photoMeasures.photoH + "px"
                  : "auto",
              top:
                photoMeasures.photoV >= 0 || photoMeasures.photoV <= 0
                  ? photoMeasures.photoV + "px"
                  : "auto",
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
              src={photo}
              alt={photo}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ) : (
          ""
        )}
        {pageNumber ? (
          <div
            className="test"
            hidden={i === 0 ? true : false}
            style={{ position: "absolute", top: "50%", left: "-5.9%" }}
            onClick={(e) => {
              if (i > 0) {
                setChangePage(i - 1);
              }
            }}
          >
            <i
              class="fas fa-chevron-left nextBackIcons"
              style={{ fontSize: "55px" }}
            ></i>
          </div>
        ) : (
          ""
        )}
        {pageNumber ? (
          <div
            style={{ position: "absolute", top: "50%", left: "101.3%" }}
            hidden={i === allPages.length - 1 ? true : false}
            onClick={(e) => {
              if (i >= 0 && i < allPages.length - 1) {
                setChangePage(i + 1);
              }
            }}
          >
            <i
              class="fas fa-chevron-right nextBackIcons"
              style={{ fontSize: "55px" }}
            ></i>
          </div>
        ) : (
          ""
        )}
        <p style={{ position: "absolute", top: "97%", left: "94%" }}>
          {pageNumber}
        </p>
      </div>
    </>
  );
}

export default Page;
