import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { tellStory } from "../../store/story";

function StoryTell() {
  let [publish, setPublished] = useState(false);
  let [title, setTitle] = useState();
  let userId = useSelector((state) => state.session.user.id);
  let dispatch = useDispatch();
  let history = useHistory();
  let createStory = () => {
    dispatch(tellStory(userId, title, publish));
    return history.push("/story/cont");
  };
  return (
    <>
      <form onSubmit={createStory}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>
          Publish{" "}
          <input
            type="checkbox"
            value={publish}
            onClick={(e) =>
              publish ? setPublished(false) : setPublished(true)
            }
          />
        </label>
        <button>Start</button>
      </form>
    </>
  );
}

export default StoryTell;
