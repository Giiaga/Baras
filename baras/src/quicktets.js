import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateBaras from "./components/CreateBaras/CreateBaras";
import { showpicture } from "./store/quickroue";

function Showpic() {
  let user = useSelector((state) => state.showpic.user);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(showpicture());
  }, []);
  return (
    <>
      <CreateBaras />
      {/* <h1>hi</h1>
      {user && <img src={user.photo} alt="hi" />} */}
    </>
  );
}

export default Showpic;
