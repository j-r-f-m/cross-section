import React from "react";
import { MathJax } from "better-react-mathjax";

/** compoent that rendes Latex*/
function LatexInput({ variable, inputName, inputRef, unit }) {
  return (
    <label>
      {<MathJax>{variable}</MathJax>}
      <input type={inputName} ref={inputRef} />
      {<MathJax>{unit}</MathJax>}
    </label>
  );
}

export default LatexInput;
