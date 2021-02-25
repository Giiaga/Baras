import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTrustBaras } from "../../store/trustBaras";
import renderTrustBaras from "./renderTrustBaras";

import "./TrustBaras.css";
import "./VideoOnlyTrustBaras.css";
import "./PhotoOnlyTrustBaras.css";

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
      <div className="TrustBarasHeading">
        <h3>Trust Baras</h3>
      </div>
      <div className="trustBarasMainDiv">
        {trustBarasAvailable &&
          renderTrustBaras(trustBaras).map((eachBaras) => eachBaras[1])}
      </div>
    </>
  );
}

export default TrustBaras;
