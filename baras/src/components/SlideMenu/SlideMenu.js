import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SlideMenu.css";

function SlideMenu({ totalNotif, setTotalNotif }) {
  let user = useSelector((state) => state.session.user);
  let dispatch = useDispatch();
  let [showMenu, setShowMenu] = useState(false);
  let history = useHistory();

  return (
    <>
      <div className="menu" id="menu">
        <div className="menuList">
          <h4
            onClick={() => {
              document.getElementById("menu").style.top = -300 + "%";
              setShowMenu(false);
              history.push(`/letBarasOut`);
            }}
          >
            Let Baras Out
          </h4>
          <h4
            onClick={() => {
              document.getElementById("menu").style.top = -300 + "%";
              setShowMenu(false);
              history.push(`/${user.username}`);
            }}
          >
            Me
          </h4>
          <h4
            onClick={() => {
              document.getElementById("menu").style.top = -300 + "%";
              setShowMenu(false);
              history.push("/world/Baras");
            }}
          >
            World Baras
          </h4>
          <h4
            onClick={() => {
              document.getElementById("menu").style.top = -300 + "%";
              setShowMenu(false);
              history.push("/Trust/Baras");
            }}
          >
            Trusted Baras
          </h4>
          <h4
            onClick={() => {
              document.getElementById("menu").style.transition = 0 + "s";
              document.getElementById("menu").style.top = -300 + "%";
              setShowMenu(false);
              history.push("/trust");
            }}
          >
            Trust
          </h4>
          <h4
            onClick={() => {
              document.getElementById("menu").style.top = -300 + "%";
              setShowMenu(false);
              history.push("/story/tell");
            }}
          >
            Story
          </h4>
          <h4
            onClick={() => {
              document.getElementById("menu").style.top = -300 + "%";
              setShowMenu(false);
              history.push("/privateChat");
            }}
          >
            Private Chat
          </h4>
          <h4
            onClick={() => {
              document.getElementById("menu").style.top = -300 + "%";
              setShowMenu(false);
              history.push("/notification");
            }}
          >
            <span style={{ color: "transparent" }}>hgi</span>
            Notification{" "}
            {totalNotif > 0 && (
              <div
                style={{
                  display: "inline-block",
                  position: "relative",
                  top: "0.5%",
                  left: "0%",
                  width: "15px",
                  height: "15px",
                  borderRadius: "15px",
                  paddingBottom: "1px",
                  backgroundColor: "orange",
                }}
              >
                <span
                  style={{
                    paddingLeft: "30%",
                    fontSize: "12px",
                    color: "white",
                  }}
                >
                  {totalNotif}
                </span>
              </div>
            )}
          </h4>
          <h4
            onClick={() => {
              history.push("/feelGood");
              return dispatch(sessionActions.logout());
            }}
          >
            Logout
          </h4>
        </div>
        <p
          className="closeButton"
          onClick={() => {
            setShowMenu(false);
            if ((document.getElementById("menu").style.top = 0 + "%")) {
              document.getElementById("menu").style.top = -300 + "%";
            }
          }}
        >
          close
        </p>
      </div>
      <button
        hidden={showMenu}
        className="menuButton"
        id="menuButton"
        onClick={() => {
          document.getElementById("menu").style.transition = 1.1 + "s";
          setShowMenu(true);
          if (
            document.getElementById("menu").style.top == -300 + "%" ||
            document.getElementById("menu").style.top != -300 + "%"
          ) {
            document.getElementById("menu").style.top = 0 + "%";
          }
        }}
      >
        V
      </button>
    </>
  );
}

export default SlideMenu;
