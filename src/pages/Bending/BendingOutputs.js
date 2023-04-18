import React from "react";
import { MathJax } from "better-react-mathjax";
import LatexResult from "../../components/LatexResult";

function BendingOutputs(props) {
  return (
    <div id="bending--outputs--container">
      <h3 id="h3--outputs">Outputs</h3>

      <LatexResult
        formula={"\\(W_{y,d} = \\frac{b \\cdot h²}{6}= \\)"}
        result={`\\(${props.state.data.wy}\\)`}
        unit={"\\(cm³\\)"}
      />

      <LatexResult
        formula={"\\(\\sigma_{m,y,d} = \\frac{M_{y,d}}{W_y}=\\)"}
        result={`\\(${props.state.data.sigma_myd}\\)`}
        unit={"\\(N/mm²\\)"}
      />

      <LatexResult
        formula={"\\(f_{m,d}=\\frac{k_{mod}\\cdot f_{m,k}}{\\gamma_m}=\\)"}
        result={`\\(${props.state.data.fmd}\\)`}
        unit={"\\(N/mm²\\)"}
      />
    </div>
  );
}

export default BendingOutputs;
