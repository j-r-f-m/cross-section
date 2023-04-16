import React from "react";
import { MathJax } from "better-react-mathjax";

function BendingOutputs() {
  return (
    <div id="bending--outputs--container">
      <h3 id="h3--outputs">Outputs</h3>
      <MathJax>{"\\(W_d = \\frac{b \\cdot h²}{6}= \\)"}</MathJax>
      <MathJax>{"\\(\\sigma_{m,y,d} = \\frac{M_y,d}{W_y}=\\)"}</MathJax>
      <MathJax>
        {"\\(f_{m,d}=\\frac{k_{mod}\\cdot f_{m,k}}{\\gamma_m}=\\)"}
      </MathJax>
    </div>
  );
}

export default BendingOutputs;