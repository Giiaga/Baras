import React, { useState } from "react";
import { useSelector } from "react-redux";

function AllTrust() {
  let allTrust = useSelector((state) => state.trust.allTrust);

  return (
    <>
      <div>HIH</div>
    </>
  );
}

export default AllTrust;
