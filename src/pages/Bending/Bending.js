import React from "react";
import BendingInputs from "./BendingInputs";

function Bending() {
  return (
    <div id="bending--container">
      <h2>Einachsiger Biegespannungsnachweis:</h2>
      <BendingInputs />
      {/* <BiegungOutput/> */}
    </div>
  );
}

export default Bending;
