import { NavLink } from "react-router-dom";

function renderThoughts(allThoughts) {
  let styledThoughts = [];

  allThoughts.map((thought) => {
    if (thought.photo) {
      if (thought.text) {
        console.log("ALRGITH", thought);
        styledThoughts.push(
          <div className="mainThoughtDiv">
            <div className="thoughtUsername">
              <div className="thoughtUserImage">
                <img src={thought.User.photo} alt={thought.User.username} />
              </div>
              <NavLink to={`/${thought.User.username}/user`}>
                {thought.User.username}
              </NavLink>
            </div>
            <div className="thoughtImageDiv">
              <img src={thought.photo} alt={thought.User.username} />
            </div>
            <div className="thoughtWithImageText">
              <p>{thought.text}</p>
            </div>
            <div className="thoughtWithImageUpdatedAt">
              <span>{thought.updatedAt}</span>
            </div>
          </div>
        );
      }
    }
  });
  return styledThoughts;
}

export default renderThoughts;
