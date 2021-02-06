import React, { useState } from "react";
import "./SlideMenu.css";

function SlideMenu() {
  let [showMenu, setShowMenu] = useState(true);
  let menuButton;
  if (showMenu) {
    menuButton = { left: 0 };
  }
  return (
    <>
      <div hidden={showMenu} className="menu">
        <div className="menuList">
          <h4 onClick={() => (window.location.href = "/user")}>Me</h4>
          <h4 onClick={() => (window.location.href = "/world-baras")}>
            World Baras
          </h4>
          <h4 onClick={() => (window.location.href = "/trust/baras")}>
            Trusted Baras
          </h4>
          <h4 onClick={() => (window.location.href = "/trust")}>Trust</h4>
        </div>
      </div>
      <button
        className="menuButton"
        style={menuButton}
        onClick={() => {
          showMenu ? setShowMenu(false) : setShowMenu(true);
        }}
      >
        Show
      </button>
    </>
  );
}

export default SlideMenu;
