import React from "react";

// simple button
function BtnCalc(props) {
  return (
    <button type="button" onClick={props.calculate}>
      Berechnen
    </button>
  );
}

export default BtnCalc;
