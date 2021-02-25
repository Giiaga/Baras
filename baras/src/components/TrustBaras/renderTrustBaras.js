import { NavLink } from "react-router-dom";

function renderTrustBaras(TrustBaras) {
  let styledTrustBaras = [];
  TrustBaras.map((eachBaras) => {
    if (!eachBaras.photo && !eachBaras.music && !eachBaras.video) {
      if (eachBaras.text) {
        styledTrustBaras.push([
          eachBaras,
          <div className="onlyTextTrustBarasDiv">
            <div className="relatesToTrustTextOnlyDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="textTrustTextOnlyDiv">
              <p>{eachBaras.text}</p>
            </div>
            <div className="createdAtUsername">
              <div className="createdAtTrustTextOnlyDiv">
                <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
              </div>
              <div className="usernameTrustTextOnlyDiv">
                <span>Trusted</span>{" "}
                <NavLink
                  style={{ color: "rgb(131, 129, 125)" }}
                  className="navlink"
                  style={{ color: "rgb(131, 129, 125)" }}
                  to={`/${eachBaras.User.username}/user`}
                >
                  {eachBaras.User.username}
                </NavLink>
              </div>
            </div>
          </div>,
        ]);
      } else {
        styledTrustBaras.push([
          eachBaras,
          <div className="onlyTextTrustBarasDiv">
            <div className="relatesToTrustTextOnlyDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="textTrustTextOnlyDiv"></div>
            <div className="usernameTextOnlyDiv">
              <span>Trusted</span>{" "}
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${eachBaras.User.username}/user`}
              >
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtTrustTextOnlyDiv">
              <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
            </div>
          </div>,
        ]);
      }
    }

    if (eachBaras.photo) {
      if (eachBaras.text) {
        styledTrustBaras.push([
          eachBaras,
          <div className="photoTrustBarasDiv">
            <div className="relatesToTrustPhotoDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="photoTrustPhotoDiv">
              <img src={eachBaras.photo} alt={eachBaras.relatesTo} />
            </div>
            <div className="textTrustPhotoDiv">
              <p>{eachBaras.text}</p>
            </div>
            <div className="createdAtUsername">
              <div className="createdAtTrustPhotoDiv">
                <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
              </div>
              <div className="usernameTrustPhotoDiv">
                <span>Trusted</span>{" "}
                <NavLink
                  style={{ color: "rgb(131, 129, 125)" }}
                  to={`/${eachBaras.User.username}/user`}
                >
                  {eachBaras.User.username}
                </NavLink>
              </div>
            </div>
          </div>,
        ]);
      } else {
        styledTrustBaras.push([
          eachBaras,
          <div className="photoTrustBarasDiv">
            <div className="relatesToTrustPhotoDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="photoTrustPhotoDiv">
              <img src={eachBaras.photo} alt={eachBaras.relatesTo} />
            </div>
            <div className="usernamePhotoDiv">
              <span>Trusted</span>{" "}
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${eachBaras.User.username}/user`}
              >
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtTrustPhotoDiv">
              <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
            </div>
          </div>,
        ]);
      }
    }
    if (eachBaras.video) {
      if (eachBaras.text) {
        styledTrustBaras.push([
          eachBaras,
          <div className="videoTrustBarasDiv">
            <div className="relatesToTrustVideoDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="videoTrustVideoDiv">
              <iframe src={eachBaras.video}></iframe>
            </div>
            <div className="textTrustVideoDiv">
              <p>{eachBaras.text}</p>
            </div>
            <div className="createdAtUsername">
              <div className="createdAtTrustVideoDiv">
                <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
              </div>
              <div className="usernameTrustVideoDiv">
                <span>Trusted</span>{" "}
                <NavLink
                  style={{ color: "rgb(131, 129, 125)" }}
                  to={`/${eachBaras.User.username}/user`}
                >
                  {eachBaras.User.username}
                </NavLink>
              </div>
            </div>
          </div>,
        ]);
      } else {
        styledTrustBaras.push([
          eachBaras,
          <div className="videoTrustBarasDiv">
            <div className="relatesToTrustVideoDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="videoTrustVideoDiv">
              <iframe src={eachBaras.video}></iframe>
            </div>
            <div className="usernameTrustVideoDiv">
              <span>Trusted</span>{" "}
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${eachBaras.User.username}/user`}
              >
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtTrustVideoDiv">
              <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
            </div>
          </div>,
        ]);
      }
    }
    if (eachBaras.music) {
      if (eachBaras.text) {
        styledTrustBaras.push([
          eachBaras,
          <div className="musicTrustBarasDiv">
            <div className="relatesToTrustMusicDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="musicTrustMusicDiv">
              <iframe src={eachBaras.music}></iframe>
            </div>
            <div className="textTrustMusicDiv">
              <p>{eachBaras.text}</p>
            </div>
            <div className="createdAtUsername">
              <div className="createdAtTrustMusicDiv">
                <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
              </div>
              <div className="usernameTrustMusicDiv">
                <span>Trusted</span>{" "}
                <NavLink
                  style={{ color: "rgb(131, 129, 125)" }}
                  to={`/${eachBaras.User.username}/user`}
                >
                  {eachBaras.User.username}
                </NavLink>
              </div>
            </div>
          </div>,
        ]);
      } else {
        styledTrustBaras.push([
          eachBaras,
          <div className="musicTrustBarasDiv">
            <div className="relatesToTrustMusicDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="musicTrustMusicDiv">
              <iframe src={eachBaras.music}></iframe>
            </div>
            <div className="usernameTrustMusicDiv">
              <span>Trusted</span>{" "}
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${eachBaras.User.username}/user`}
              >
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtTrustMusicDiv">
              <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
            </div>
          </div>,
        ]);
      }
    }
  });
  return styledTrustBaras;
}

export default renderTrustBaras;
