import React from "react";
import { MathJax } from "better-react-mathjax";

function LatexResult(props) {
  return (
    <div className="formula--container">
      <MathJax>{props.formula}</MathJax>
      <MathJax hideUntilTypeset={"first"} inline dynamic>
        {props.result}
      </MathJax>
    </div>
  );
}

export default LatexResult;
