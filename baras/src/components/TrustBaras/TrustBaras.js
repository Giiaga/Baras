import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TrustBaras() {
  let trustBaras = useSelector((state) => state.trustBaras.trustBaras);
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
        {trustBarasAvailable && trustBaras.map()}
      </div>
    </>
  );
}

export default TrustBaras;
