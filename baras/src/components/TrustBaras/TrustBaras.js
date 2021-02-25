import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTrustBaras } from "../../store/trustBaras";
import renderTrustBaras from "./renderTrustBaras";

function TrustBaras() {
  let trustBaras = useSelector((state) => state.TrustBaras.allTrustBaras);
  let userId = useSelector((state) => state.session.user.id);

  let [trustBarasAvailable, setTrustBarasAvailable] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrustBaras(userId)).then(
      (data) => data && setTrustBarasAvailable(true)
    );
  }, [dispatch]);
  return (
    <>
      <div>Trust Baras</div>
      <div className="trustBarasMainDiv">
        {trustBarasAvailable && (
          <div>
            {renderTrustBaras(trustBaras).map((eachBaras) => eachBaras)}{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default TrustBaras;
