import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTrust } from "../../store/trust";

function AllTrust() {
  let everyTrust = useSelector((state) => state.trust.allTrust);
  let userId = useSelector((state) => state.session.user.id);

  let [allTrustAvailable, setAllTrustAvailable] = useState(false);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(allTrust(userId)).then(
      (data) => data && setAllTrustAvailable(true)
    );
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>TRUSTED</h1>
      </div>
      {allTrustAvailable ? (
        everyTrust.map((trust) => (
          <div key={trust.id}>
            <img
              src={trust.photo}
              alt={trust.username}
              style={{ width: "60px", height: "60px", borderRadius: "20px" }}
            />
            <div>
              <p>{trust.username}</p>
              <p>Trusted Since: {trust.createdAt}</p>
            </div>
            <div>
              <button>Message</button>
              <button>Remove Trust</button>
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
