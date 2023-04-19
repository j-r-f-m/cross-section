import React from "react";
import { MathJax } from "better-react-mathjax";

// component that outputs latex
function LatexResult({ formula, result, unit }) {
  return (
    <div className="formula--container">
      <MathJax>{formula}</MathJax>
      {/*attributes needed, MathJax wont rerender typset after setState otherwise
       */}
      <MathJax hideUntilTypeset={"first"} inline dynamic>
        {result}
      </MathJax>
      <MathJax>{unit}</MathJax>
    </div>
  );
}

export default LatexResult;
