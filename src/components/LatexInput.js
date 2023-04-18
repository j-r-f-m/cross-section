import React from "react";
import { MathJax } from "better-react-mathjax";
import { useFormContext } from "react-hook-form";

/** compoent that rendes Latex*/
function LatexInput({ labelTxt, type, inputRef, unit, name }) {
  const { register } = useFormContext();
  return (
    <label>
      {<MathJax>{labelTxt}</MathJax>}
      <input
        type={type}
        ref={inputRef}
        {...register(name, {
          required: {
            value: true,
            message: "required",
          },
        })}
      />
      {<MathJax>{unit}</MathJax>}
    </label>
  );
}

export default LatexInput;
