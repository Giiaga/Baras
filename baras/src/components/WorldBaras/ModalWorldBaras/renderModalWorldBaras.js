import { NavLink } from "react-router-dom";

function renderModalWorldBaras(Baras) {
  let styledWorldBaras = [];

  //   worldBaras.map((Baras) => {
  if (Baras.photo) {
    if (Baras.text) {
      styledWorldBaras.push([
        <div className="modalPhotoBarasDiv">
          <div className="modalRelatesToPhotoDiv">
            <h3>{Baras.relatesTo}</h3>
          </div>
          <div className="wrapPhotoTextName">
            <div className="modalPhotoPhotoDiv">
              <img src={Baras.photo} alt={Baras.relatesTo} />
            </div>
            <div className="modalTextPhotoDiv">
              <p>{Baras.text}</p>
            </div>
            <div className="modalUsernamePhotoDiv">
              <NavLink
                style={{ color: "rgb(131, 129, 125)" }}
                to={`/${Baras.User.username}/user`}
              >
                {Baras.User.username}
              </NavLink>
            </div>
          </div>
        </div>,
      ]);
    } else {
      styledWorldBaras.push([
        <div className="modalPhotoBarasDiv">
          <div className="modalRelatesToPhotoDiv">
            <h3>{Baras.relatesTo}</h3>
          </div>
          <div className="modalPhotoPhotoDiv">
            <img src={Baras.photo} alt={Baras.relatesTo} />
          </div>
          <div className="modalUsernamePhotoDiv">
            <NavLink
              style={{ color: "rgb(131, 129, 125)" }}
              to={`/${Baras.User.username}/user`}
            >
              {Baras.User.username}
            </NavLink>
          </div>
        </div>,
      ]);
    }
  }

  if (Baras.video) {
    if (Baras.text) {
      styledWorldBaras.push([
        <div className="modalVideoBarasDiv">
          <div className="modalRelatesToVideoDiv">
            <h3>{Baras.relatesTo}</h3>
          </div>
          <div className="modalVideoVideoDiv">
            <iframe src={Baras.video}></iframe>
          </div>
          <div className="modalTextVideoDiv">
            <p>{Baras.text}</p>
          </div>
          <div className="modalUsernameVideoDiv">
            <NavLink
              style={{ color: "rgb(131, 129, 125)" }}
              to={`/${Baras.User.username}/user`}
            >
              {Baras.User.username}
            </NavLink>
          </div>
        </div>,
      ]);
    } else {
      styledWorldBaras.push([
        <div className="modalVideoBarasDiv">
          <div className="modalRelatesToVideoDiv">
            <h3>{Baras.relatesTo}</h3>
          </div>
          <div className="modalVideoVideoDiv">
            <img src={Baras.video} alt={Baras.relatesTo} />
          </div>
          <div className="modalUsernameVideoDiv">
            <span>by</span>{" "}
            <NavLink
              style={{ color: "rgb(131, 129, 125)" }}
              to={`/${Baras.User.username}/user`}
            >
              {Baras.User.username}
            </NavLink>
          </div>
        </div>,
      ]);
    }
  }
  if (Baras.music) {
    if (Baras.text) {
      styledWorldBaras.push([
        <div className="modalMusicBarasDiv">
          <div className="modalRelatesToMusicDiv">
            <h3>{Baras.relatesTo}</h3>
          </div>
          <div className="modalMusicMusicDiv">
            <iframe src={Baras.music}></iframe>
          </div>
          <div className="modalTextMusicDiv">
            <p>{Baras.text}</p>
          </div>
          <div className="modalUsernameMusicDiv">
            <NavLink
              style={{ color: "rgb(131, 129, 125)" }}
              to={`/${Baras.User.username}/user`}
            >
              {Baras.User.username}
            </NavLink>
          </div>
        </div>,
      ]);
    } else {
      styledWorldBaras.push([
        <div className="modalMusicBarasDiv">
          <div className="modalRelatesToMusicDiv">
            <h3>{Baras.relatesTo}</h3>
          </div>
          <div className="modalMusicMusicDiv">
            <img src={Baras.music} alt={Baras.relatesTo} />
          </div>
          <div className="modalUsernameMusicDiv">
            <span>by</span>{" "}
            <NavLink
              style={{ color: "rgb(131, 129, 125)" }}
              to={`/${Baras.User.username}/user`}
            >
              {Baras.User.username}
            </NavLink>
          </div>
        </div>,
      ]);
    }
  }
  if (Baras.text) {
    styledWorldBaras.push([
      <div className="modalMusicBarasDiv">
        <div className="modalRelatesToMusicDiv">
          <h3>{Baras.relatesTo}</h3>
        </div>

        <div className="modalTextTextDiv">
          <p>{Baras.text}</p>
        </div>
        <div className="modalUsernameTextDiv">
          <NavLink
            style={{ color: "rgb(131, 129, 125)" }}
            to={`/${Baras.User.username}/user`}
          >
            {Baras.User.username}
          </NavLink>
        </div>
      </div>,
    ]);
  } else {
    styledWorldBaras.push([
      <div className="modalMusicBarasDiv">
        <div className="modalRelatesToMusicDiv">
          <h3>{Baras.relatesTo}</h3>
        </div>
        <div className="modalMusicMusicDiv">
          <img src={Baras.music} alt={Baras.relatesTo} />
        </div>
        <div className="modalUsernameMusicDiv">
          <span>by</span>{" "}
          <NavLink
            style={{ color: "rgb(131, 129, 125)" }}
            to={`/${Baras.User.username}/user`}
          >
            {Baras.User.username}
          </NavLink>
        </div>
      </div>,
    ]);
  }

  return styledWorldBaras[0];
}

export default renderModalWorldBaras;
