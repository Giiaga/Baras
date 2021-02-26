// import { NavLink } from "react-router-dom";

function renderUserBaras(worldBaras) {
  let styledWorldBaras = [];
  worldBaras.map((eachBaras) => {
    if (!eachBaras.photo && !eachBaras.music && !eachBaras.video) {
      if (eachBaras.text) {
        styledWorldBaras.push([
          eachBaras,
          <div className="modalMusicBarasDiv">
            <div className="modalRelatesToMusicDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div
              className="modalTextMusicDiv"
              style={{ width: "90%", height: "372px" }}
            >
              <p>{eachBaras.text}</p>
            </div>
            {/* <div className="usernameTextOnlyDiv">
              <span>by</span>{" "}
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                className="navlink"
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${eachBaras.User.username}/user`}
              >
                {eachBaras.User.username}
              </NavLink>
            </div> */}
            <div className="createdAtTextOnlyDiv">
              <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
            </div>
          </div>,
        ]);
      } else {
        styledWorldBaras.push([
          eachBaras,
          <div className="onlyTextBarasDiv">
            <div className="modalRelatesToMusicDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="textTextOnlyDiv"></div>
            {/* <div className="usernameTextOnlyDiv">
              <span>by</span>{" "}
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${eachBaras.User.username}/user`}
              >
                {eachBaras.User.username}
              </NavLink>
            </div> */}
            <div className="createdAtTextOnlyDiv">
              <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
            </div>
          </div>,
        ]);
      }
    }

    if (eachBaras.photo) {
      if (eachBaras.text) {
        styledWorldBaras.push([
          eachBaras,
          <div className="modalPhotoBarasDiv">
            <div className="modalRelatesToPhotoDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div
              className="modalPhotoPhotoDiv"
              style={{
                width: "40%px",
                display: "inline-block",
                height: "auto",
              }}
            >
              <img src={eachBaras.photo} alt={eachBaras.relatesTo} />
            </div>
            <div
              className="modalTextPhotoDiv"
              style={{ display: "inline-block" }}
            >
              <p>{eachBaras.text}</p>
            </div>
            {/* <div className="usernamePhotoDiv">
              <span>by</span>{" "}
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${eachBaras.User.username}/user`}
              >
                {eachBaras.User.username}
              </NavLink>
            </div> */}
            <div className="createdAtPhotoDiv">
              <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
            </div>
          </div>,
        ]);
      } else {
        styledWorldBaras.push([
          eachBaras,
          <div className="photoBarasDiv">
            <div className="relatesToPhotoDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="photoPhotoDiv">
              <img src={eachBaras.photo} alt={eachBaras.relatesTo} />
            </div>
            {/* <div className="usernamePhotoDiv">
              <span>by</span>{" "}
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${eachBaras.User.username}/user`}
              >
                {eachBaras.User.username}
              </NavLink>
            </div> */}
            <div className="createdAtPhotoDiv">
              <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
            </div>
          </div>,
        ]);
      }
    }
    if (eachBaras.video) {
      if (eachBaras.text) {
        styledWorldBaras.push([
          eachBaras,
          <div className="modalMusicBarasDiv">
            <div className="modalRelatesToMusicDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="modalMusicMusicDiv">
              <iframe src={eachBaras.video}></iframe>
            </div>
            <div className="modalTextMusicDiv">
              <p>{eachBaras.text}</p>
            </div>
            {/* <div className="usernameVideoDiv">
              <span>by</span>{" "}
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${eachBaras.User.username}/user`}
              >
                {eachBaras.User.username}
              </NavLink>
            </div> */}
            <div className="createdAtVideoDiv">
              <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
            </div>
          </div>,
        ]);
      } else {
        styledWorldBaras.push([
          eachBaras,
          <div className="videoBarasDiv">
            <div className="relatesToVideoDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="videoVideoDiv">
              <iframe src={eachBaras.video}></iframe>
            </div>
            {/* <div className="usernameVideoDiv">
              <span>by</span>{" "}
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${eachBaras.User.username}/user`}
              >
                {eachBaras.User.username}
              </NavLink>
            </div> */}
            <div className="createdAtVideoDiv">
              <span>let out: {eachBaras.updatedAt.slice(0, 10)}</span>
            </div>
          </div>,
        ]);
      }
    }
    if (eachBaras.music) {
      if (eachBaras.text) {
        styledWorldBaras.push([
          eachBaras,
          <div className="modalMusicBarasDiv">
            <div className="modalRelatesToMusicDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="modalMusicMusicDiv">
              <iframe src={eachBaras.music}></iframe>
            </div>
            <div className="modalTextMusicDiv">
              <p>{eachBaras.text}</p>
            </div>
            {/* <div className="usernameMusicDiv">
              <span>by</span>{" "}
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${eachBaras.User.username}/user`}
              >
                {eachBaras.User.username}
              </NavLink>
            </div> */}
            <div className="createdAtMusicDiv">
              <span>let out: {eachBaras.updatedAt.slice(0, 16)}</span>
            </div>
          </div>,
        ]);
      }
      //   } else {
      // styledWorldBaras.push([
      //   eachBaras,
      //   <div className="musicBarasDiv">
      //     <div className="relatesToMusicDiv">
      //       <h3>{eachBaras.relatesTo}</h3>
      //     </div>
      //     <div className="musicMusicDiv">
      //       <iframe src={eachBaras.music}></iframe>
      //     </div>
      //     <div className="usernameMusicDiv">
      //       <span>by</span>{" "}
      //       <NavLink
      //         style={{ color: "rgb(131, 129, 125)" }}
      //         to={`/${eachBaras.User.username}/user`}
      //       >
      //         {eachBaras.User.username}
      //       </NavLink>
      //     </div>
      //     <div className="createdAtMusicDiv">
      //       <span>let out: {eachBaras.updatedAt.slice(0, 16)}</span>
      //     </div>
      //   </div>,
      //     ]);
      //   }
    }
  });
  return styledWorldBaras;
}

export default renderUserBaras;
