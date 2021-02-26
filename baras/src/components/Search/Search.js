import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../store/search";

function Search() {
  let [searching, setSearching] = useState("");
  let [userFound, setFoundUser] = useState(false);

  let foundUsers = useSelector((state) => state.search.foundUsers);
  console.log(foundUsers, "SUFJSDF");
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchUser(searching)).then(
      (data) => data != "not Found" && setFoundUser(true)
    );
  }, [dispatch, searching]);
  return (
    <>
      <div>hgfkdghk</div>
      <input
        type="text"
        value={searching}
        onChange={(e) => setSearching(e.target.value)}
      />
      {foundUsers && (
        <div style={{ width: "100px" }}>
          <ul>
            {foundUsers.map((user) => (
              <li onClick={() => setFoundUser(false)}>{user.username}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Search;
