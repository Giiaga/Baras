import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../store/search";

import "./Search.css";

function Search() {
  let [searching, setSearching] = useState("");
  let [search, setSearch] = useState(false);

  let foundUsers = useSelector((state) => state.search.foundUsers);
  console.log(foundUsers, "SUFJSDF");
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
        <button id="closeSearchButton" onClick={() => setSearch(false)}>
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
          {foundUsers.map((user) => (
            <li className="searchResult">{user.username}</li>
          ))}
          {/* </ul> */}
        </div>
      )}
    </>
  );
}

export default Search;
