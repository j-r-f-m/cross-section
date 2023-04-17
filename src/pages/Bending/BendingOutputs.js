import React from "react";
import { MathJax } from "better-react-mathjax";
import LatexResult from "../../components/LatexResult";

function BendingOutputs(props) {
  return (
    <div id="bending--outputs--container">
      <h3 id="h3--outputs">Outputs</h3>

      <LatexResult
        formula={"\\(W_d = \\frac{b \\cdot h²}{6}= \\)"}
        result={`\\(${props.state.data.wy}\\)`}
      />

      <LatexResult
        formula={"\\(\\sigma_{m,y,d} = \\frac{M_{y,d}}{W_y}=\\)"}
        result={`\\(${props.state.data.sigma_myd}\\)`}
      />

      <LatexResult
        formula={"\\(f_{m,d}=\\frac{k_{mod}\\cdot f_{m,k}}{\\gamma_m}=\\)"}
        result={`\\(${props.state.data.fmd}\\)`}
      />
    </div>
  );
}

export default BendingOutputs;
