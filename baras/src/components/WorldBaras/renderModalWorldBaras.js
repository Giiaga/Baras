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
          <div className="modalPhotoPhotoDiv">
            <img src={Baras.photo} alt={Baras.relatesTo} />
          </div>
          <div className="modalTextPhotoDiv">
            <p>{Baras.text}</p>
          </div>
          <div className="modalUsernamePhotoDiv">
            <span>by</span>{" "}
            <NavLink
              style={{ color: "rgb(131, 129, 125)" }}
              to={`/${Baras.User.username}/user`}
            >
              {Baras.User.username}
            </NavLink>
          </div>
          <div className="modalCreatedAtPhotoDiv">
            <span>let out: {Baras.updatedAt.slice(0, 16)}</span>
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
            <span>by</span>{" "}
            <NavLink
              style={{ color: "rgb(131, 129, 125)" }}
              to={`/${Baras.User.username}/user`}
            >
              {Baras.User.username}
            </NavLink>
          </div>
          <div className="modalCreatedAtPhotoDiv">
            <span>let out: {Baras.updatedAt.slice(0, 16)}</span>
          </div>
        </div>,
      ]);
    }
  }

  if (Baras.video) {
    if (Baras.text) {
      styledWorldBaras.push([
        <div className="modalPhotoBarasDiv">
          <div className="modalRelatesToPhotoDiv">
            <h3>{Baras.relatesTo}</h3>
          </div>
          <div className="modalPhotoPhotoDiv">
            <img src={Baras.video} alt={Baras.relatesTo} />
          </div>
          <div className="modalTextPhotoDiv">
            <p>{Baras.text}</p>
          </div>
          <div className="modalUsernamePhotoDiv">
            <span>by</span>{" "}
            <NavLink
              style={{ color: "rgb(131, 129, 125)" }}
              to={`/${Baras.User.username}/user`}
            >
              {Baras.User.username}
            </NavLink>
          </div>
          <div className="modalCreatedAtPhotoDiv">
            <span>let out: {Baras.updatedAt.slice(0, 16)}</span>
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
            <img src={Baras.video} alt={Baras.relatesTo} />
          </div>
          <div className="modalUsernamePhotoDiv">
            <span>by</span>{" "}
            <NavLink
              style={{ color: "rgb(131, 129, 125)" }}
              to={`/${Baras.User.username}/user`}
            >
              {Baras.User.username}
            </NavLink>
          </div>
          <div className="modalCreatedAtPhotoDiv">
            <span>let out: {Baras.updatedAt.slice(0, 16)}</span>
          </div>
        </div>,
      ]);
    }
  }

  return styledWorldBaras[0];
}

export default renderModalWorldBaras;
