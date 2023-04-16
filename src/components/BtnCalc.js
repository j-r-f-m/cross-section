import React from "react";

function BtnCalc(props) {
  return (
    <button type="button" onClick={props.startCalculation}>
      Berechnen
    </button>
  );
}

export default BtnCalc;
