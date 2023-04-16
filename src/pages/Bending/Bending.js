import React from "react";
import BendingInputs from "./BendingInputs";
import BendingOutputs from "./BendingOutputs";
import { MathJax } from "better-react-mathjax";

function Bending() {
  return (
    <div id="bending--container">
      <h2>Einachsiger Biegespannungsnachweis:</h2>
      <BendingInputs />
      <BendingOutputs />
    </div>
  );
}

export default Bending;
