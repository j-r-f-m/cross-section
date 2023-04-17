import React from "react";

function BtnCalc(props) {
  return (
    <button type="button" onClick={props.calculate}>
      Berechnen
    </button>
  );
}

export default BtnCalc;
