import React, { useState } from "react";
import "./SlideMenu.css";

function SlideMenu() {
  let [showMenu, setShowMenu] = useState(false);
  let menuButton;
  if (showMenu) {
    menuButton = { left: 0 };
  }
  return (
    <>
      <div hidden={showMenu} className="menu">
        <h4>Me</h4>
        <h4>World Baras</h4>
        <h4>Trusted Baras</h4>
        <h4>Trust</h4>
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
      {/* <h1>hsdfkjhgdfh</h1> */}
    </>
  );
}

export default SlideMenu;
