import React from "react";

// button for starting calculations
function BtnCalc({ onSubmit }) {
  return (
    <button type="button" onClick={onSubmit}>
      Berechnen
    </button>
  );
}

export default BtnCalc;
