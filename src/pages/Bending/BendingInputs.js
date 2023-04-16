import React from "react";
import { MathJax } from "better-react-mathjax";

function BendingInputs() {
  return (
    <form id="bending--inputs--container">
      <h3>Inputs</h3>
      <label>
        <MathJax>{"\\(M_{y,d}=\\)"}</MathJax>
        <input name="moment" />
        <MathJax>{"\\([kN]\\)"}</MathJax>
      </label>
      <hr />
      <label>
        <MathJax>{"\\(b=\\)"}</MathJax>
        <input name="moment" />
        <MathJax>{"\\([kN]\\)"}</MathJax>
      </label>
      <label>
        <MathJax>{"\\(h=\\)"}</MathJax>
        <input name="moment" />
        <MathJax>{"\\([kN]\\)"}</MathJax>
      </label>
      <hr />
      <label>
        <MathJax>{"\\(k_{mod}=\\)"}</MathJax>
        <input name="moment" />
        <MathJax>{"\\([kN]\\)"}</MathJax>
      </label>
      <label>
        <MathJax>{"\\(f_{m,k}=\\)"}</MathJax>
        <input name="moment" />
        <MathJax>{"\\([kN]\\)"}</MathJax>
      </label>
      <label>
        <MathJax>{"\\(\\gamma_{m}=\\)"}</MathJax>
        <input name="moment" />
        <MathJax>{"\\([kN]\\)"}</MathJax>
      </label>
    </form>
  );
}

export default BendingInputs;
