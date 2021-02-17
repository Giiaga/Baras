import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SlideMenu.css";

function SlideMenu() {
  let user = useSelector((state) => state.session.user);
  let dispatch = useDispatch();
  let [showMenu, setShowMenu] = useState(true);
  let history = useHistory();
  let menuButton;
  if (showMenu) {
    menuButton = { left: 0 };
    // document.getElementById("menu").style.width = 300 + "px";
  }
  return (
    <>
      <div className="menu" id="menu">
        <div className="menuList">
          <h4 onClick={() => (window.location.href = `${user.username}`)}>
            Me
          </h4>
          <h4 onClick={() => (window.location.href = "/world-baras")}>
            World Baras
          </h4>
          <h4 onClick={() => (window.location.href = "/trust-baras")}>
            Trusted Baras
          </h4>
          <h4 onClick={() => (window.location.href = "/trust")}>Trust</h4>
          <h4
            onClick={() =>
              dispatch(sessionActions.logout()).then(() =>
                history.push("/feelGood")
              )
            }
          >
            Logout
          </h4>
        </div>
      </div>
      <button
        className="menuButton"
        style={menuButton}
        onClick={() => {
          showMenu ? setShowMenu(false) : setShowMenu(true);
          if (document.getElementById("menu").style.top === 0) {
            document.getElementById("menu").style.top = 15 + "%";
          } else {
            document.getElementById("menu").style.top = 0 + "%";
          }
        }}
      >
        Show
      </button>
    </>
  );
}

export default SlideMenu;
