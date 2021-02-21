import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTrust, removeTrust } from "../../store/trust";

function AllTrust() {
  let everyTrust = useSelector((state) => state.trust.allTrust);
  let userId = useSelector((state) => state.session.user.id);

  let [allTrustAvailable, setAllTrustAvailable] = useState(false);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(allTrust(userId)).then(
      (data) => data.length && setAllTrustAvailable(true)
    );
  }, [dispatch]);

  function removeTrusted(e, userId, trustedId) {
    e.preventDefault();
    dispatch(removeTrust(userId, trustedId));
  }

  return (
    <>
      <div>
        <h1>TRUSTED</h1>
      </div>
      {allTrustAvailable ? (
        everyTrust.map((trust) => (
          <div key={trust.id}>
            <img
              src={trust.trusted.photo}
              alt={trust.trusted.username}
              style={{ width: "90px", height: "90px", borderRadius: "90px" }}
            />
            <div>
              <p>{trust.trusted.username}</p>
              <p>Trusted Since: {trust.Trust.createdAt}</p>
            </div>
            <div>
              <button>Message</button>
              <button
                onClick={(e) => removeTrusted(e, userId, trust.trusted.id)}
              >
                Remove Trust
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>CREATE</div>
      )}
    </>
  );
}

export default AllTrust;
