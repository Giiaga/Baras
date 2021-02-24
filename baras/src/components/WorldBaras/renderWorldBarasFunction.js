import { NavLink } from "react-router-dom";

function renderWorldBaras(worldBaras) {
  let styledWorldBaras = [];
  worldBaras.map((eachBaras) => {
    if (!eachBaras.photo && !eachBaras.music && !eachBaras.video) {
      if (eachBaras.text.length > 0) {
        styledWorldBaras.push(
          <div className="onlyTextBarasDiv">
            <div className="relatesToTextOnlyDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="textTextOnlyDiv">
              <p>{eachBaras.text}</p>
            </div>
            <div className="usernameTextOnlyDiv">
              <NavLink to={`/${eachBaras.User.username}/user`}>
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtTextOnlyDiv">
              <span>{eachBaras.createdAt.slice(0, 16)}</span>
            </div>
          </div>
        );
      } else {
        styledWorldBaras.push(
          <div className="onlyTextBarasDiv">
            <div className="relatesToTextOnlyDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="textTextOnlyDiv"></div>
            <div className="usernameTextOnlyDiv">
              <NavLink to={`/${eachBaras.User.username}/user`}>
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtTextOnlyDiv">
              <span>{eachBaras.createdAt.slice(0, 16)}</span>
            </div>
          </div>
        );
      }
    }

    if (eachBaras.photo) {
      if (eachBaras.text.length > 0) {
        styledWorldBaras.push(
          <div className="photoBarasDiv">
            <div className="relatesToPhotoDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="photoPhotoDiv">
              <img src={eachBaras.photo} alt={eachBaras.relatesTo} />
            </div>
            <div className="textPhotoDiv">
              <p>{eachBaras.text}</p>
            </div>
            <div className="usernamePhotoDiv">
              <NavLink to={`/${eachBaras.User.username}/user`}>
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtPhotoDiv">
              <span>{eachBaras.createdAt.slice(0, 16)}</span>
            </div>
          </div>
        );
      } else {
        styledWorldBaras.push(
          <div className="photoBarasDiv">
            <div className="relatesToPhotoDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="photoPhotoDiv">
              <img src={eachBaras.photo} alt={eachBaras.relatesTo} />
            </div>
            <div className="usernamePhotoDiv">
              <NavLink to={`/${eachBaras.User.username}/user`}>
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtPhotoDiv">
              <span>{eachBaras.createdAt.slice(0, 16)}</span>
            </div>
          </div>
        );
      }
    }
    if (eachBaras.video) {
      if (eachBaras.text.length > 0) {
        styledWorldBaras.push(
          <div className="videoBarasDiv">
            <div className="relatesToVideoDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="videoVideoDiv">
              <iframe src={eachBaras.video}></iframe>
            </div>
            <div className="textVideoDiv">
              <p>{eachBaras.text.slice(0, 287)}</p>
            </div>
            <div className="usernameVideoDiv">
              <NavLink to={`/${eachBaras.User.username}/user`}>
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtVideoDiv">
              <span>{eachBaras.createdAt.slice(0, 16)}</span>
            </div>
          </div>
        );
      } else {
        styledWorldBaras.push(
          <div className="videoBarasDiv">
            <div className="relatesToVideoDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="videoVideoDiv">
              <iframe src={eachBaras.video}></iframe>
            </div>
            <div className="usernameVideoDiv">
              <NavLink to={`/${eachBaras.User.username}/user`}>
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtVideoDiv">
              <span>{eachBaras.createdAt.slice(0, 16)}</span>
            </div>
          </div>
        );
      }
    }
    if (eachBaras.music) {
      if (eachBaras.text.length > 0) {
        styledWorldBaras.push(
          <div className="musicBarasDiv">
            <div className="relatesToMusicDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="musicMusicDiv">
              <iframe src={eachBaras.music}></iframe>
            </div>
            <div className="textMusicDiv">
              <p>{eachBaras.text}</p>
            </div>
            <div className="usernameMusicDiv">
              <NavLink to={`/${eachBaras.User.username}/user`}>
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtMusicDiv">
              <span>{eachBaras.createdAt.slice(0, 16)}</span>
            </div>
          </div>
        );
      } else {
        styledWorldBaras.push(
          <div className="musicBarasDiv">
            <div className="relatesToMusicDiv">
              <h3>{eachBaras.relatesTo}</h3>
            </div>
            <div className="musicMusicDiv">
              <iframe src={eachBaras.music}></iframe>
            </div>
            <div className="usernameMusicDiv">
              <NavLink to={`/${eachBaras.User.username}/user`}>
                {eachBaras.User.username}
              </NavLink>
            </div>
            <div className="createdAtMusicDiv">
              <span>{eachBaras.createdAt.slice(0, 16)}</span>
            </div>
          </div>
        );
      }
    }
  });
  return styledWorldBaras;
}

export default renderWorldBaras;
