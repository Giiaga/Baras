import { NavLink } from "react-router-dom";

function renderThoughts(allThoughts) {
  let styledThoughts = [];

  allThoughts.map((thought) => {
    if (thought.photo) {
      if (thought.text) {
        styledThoughts.push(
          <div className="mainThoughtDiv">
            <div className="thoughtUsernameImageDiv">
              <div className="thoughtUserImage">
                <img src={thought.User.photo} alt={thought.User.username} />
              </div>
              <NavLink
                to={`/${thought.User.username}/user`}
                className="thoughtUsername"
              >
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
              <span>thought: {thought.updatedAt.slice(11, 19)}</span>
            </div>
          </div>
        );
      }
    }
  });
  return styledThoughts;
}

export default renderThoughts;
