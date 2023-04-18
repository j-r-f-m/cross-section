import React from "react";
import { MathJax } from "better-react-mathjax";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

/** compoent that rendes Latex*/
function LatexInput({ labelTxt, type, inputRef, unit, name }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label>
      {<MathJax>{labelTxt}</MathJax>}
      <input
        {...register(name, {
          required: {
            value: true,
            message: "Please enter a number",
          },
        })}
      />

      {<MathJax>{unit}</MathJax>}
      <div className="error--container">
        <ErrorMessage errors={errors} name={name} />
      </div>
    </label>
  );
}

export default LatexInput;
