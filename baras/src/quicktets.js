import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showpicture } from "./store/quickroue";

function Showpic() {
  let user = useSelector((state) => state.showpic.user);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(showpicture());
  }, []);

  return (
    <>
      <h1>hi</h1>
      {user && <img src={user.photo} alt="hi" />}
    </>
  );
}

export default Showpic;
