import React from "react";

// simple button
function BtnCalc({ onSubmit }) {
  return (
    <button type="button" onClick={onSubmit}>
      Berechnen
    </button>
  );
}

export default BtnCalc;
