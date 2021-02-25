import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { tellStory } from "../../store/story";
import "./StoryTell.css";

function StoryTell() {
  let [publish, setPublished] = useState(false);
  let [photo, setPhoto] = useState("");
  let [title, setTitle] = useState("");

  let userId = useSelector((state) => state.session.user.id);
  let dispatch = useDispatch();
  let history = useHistory();

  let createStory = (e) => {
    e.preventDefault();
    dispatch(tellStory(userId, title, publish)).then((data) => {
      let paramTitle = title.split(" ").join("<:>");
      if (data) {
        return history.push(`/story/${paramTitle}/cont`);
      }
    });
  };

  let changePhoto = (data) => {
    let fileread = new FileReader();
    fileread.onload = (e) => {
      setPhoto(e.target.result);
    };
    fileread.readAsDataURL(data);
  };

  return (
    <>
      <form onSubmit={createStory} className="storyTellForm">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label id="storyTellFormPhoto">
          Photo
          <input type="file" onChange={(e) => changePhoto(e.target.files[0])} />
        </label>
        <label id="publishForm">
          Publish{" "}
          <input
            type="checkbox"
            value={publish}
            onClick={(e) =>
              publish ? setPublished(false) : setPublished(true)
            }
          />
        </label>
        {photo && (
          <div
            style={{
              border: "1px solid orange",
              marginTop: "1%",
              margin: "auto",
              height: "300px",
              width: "300px",
              minHeight: "100px",
              minWidth: "100px",
            }}
          >
            <img
              src={photo}
              alt="temp"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        <button type="submit">Start</button>
      </form>
    </>
  );
}

export default StoryTell;
