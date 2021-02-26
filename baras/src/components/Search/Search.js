import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { searchUser } from "../../store/search";

import "./Search.css";

function Search() {
  let [searching, setSearching] = useState("");
  let [search, setSearch] = useState(false);

  let foundUsers = useSelector((state) => state.search.foundUsers);

  let history = useHistory();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchUser(searching));
    // (data) => data != "not Found" && setFoundUser(true)
    // );
  }, [dispatch, searching]);
  return (
    <>
      {!search ? (
        <button id="searchButton" onClick={() => setSearch(true)}>
          <i class="fab fa-searchengin"></i>
        </button>
      ) : (
        <button
          id="closeSearchButton"
          onClick={() => {
            setSearch(false);
            setSearching("");
          }}
        >
          <i class="fas fa-window-close"></i>
        </button>
      )}
      {search && (
        <input
          id="searchBox"
          type="text"
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
        />
      )}
      {foundUsers && (
        <div id="searchResultDiv">
          {/* <ul> */}
          {search &&
            foundUsers.map((user) => (
              <li
                className="searchResult"
                onClick={() => history.push(`/${user.username}/user`)}
              >
                {user.username}
              </li>
            ))}
          {/* </ul> */}
        </div>
      )}
    </>
  );
}

export default Search;
