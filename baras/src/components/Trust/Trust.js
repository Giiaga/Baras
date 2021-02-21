import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTrust, removeTrust } from "../../store/trust";
import "./Trust.css";

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
    dispatch(removeTrust(userId, trustedId)).then(() =>
      dispatch(allTrust(userId)).then(
        (data) => !data.length && setAllTrustAvailable(false)
      )
    );
  }

  return (
    <>
      <div>
        <h1
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "400px",
            fontSize: "80px",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        >
          TRUSTED
        </h1>
      </div>
      {allTrustAvailable ? (
        everyTrust.map((trust) => (
          <div>
            <div key={trust.id} className="TrustMainDiv">
              <img
                src={trust.trusted.photo}
                alt={trust.trusted.username}
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "90px",
                  border: "1px solid orange",
                }}
              />
              <div className="TrustDetails">
                <p>{trust.trusted.username}</p>
                <p>Trusted Since: {trust.Trust.createdAt}</p>
              </div>
              <div className="TrustButtons">
                <button>Message</button>
                <button
                  onClick={(e) => removeTrusted(e, userId, trust.trusted.id)}
                >
                  Remove Trust
                </button>
              </div>
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
