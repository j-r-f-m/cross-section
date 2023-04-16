import React from "react";
import { MathJax } from "better-react-mathjax";

function BendingInputs(props) {
  return (
    <form id="bending--inputs--container">
      <h3>Inputs</h3>
      <label>
        {<MathJax>{"\\(M_{y,d}=\\)"}</MathJax>}
        <input name="moment" onChange={props.getMyd} />
        {<MathJax>{"\\([kNm]\\)"}</MathJax>}
      </label>
      <hr />
      <label>
        {<MathJax>{"\\(b=\\)"}</MathJax>}
        <input name="moment" onChange={props.getB} />
        {<MathJax>{"\\([cm]\\)"}</MathJax>}
      </label>
      <label>
        {<MathJax>{"\\(h=\\)"}</MathJax>}
        <input name="moment" onChange={props.getH} />
        {<MathJax>{"\\([cm]\\)"}</MathJax>}
      </label>
      <hr />
      <label>
        {<MathJax>{"\\(k_{mod}=\\)"}</MathJax>}
        <input name="moment" onChange={props.getKmod} />
        {<MathJax>{"\\([kN]\\)"}</MathJax>}
      </label>
      <label>
        {<MathJax>{"\\(f_{m,k}=\\)"}</MathJax>}
        <input name="moment" onChange={props.getFmk} />
        {<MathJax>{"\\([N/mm²]\\)"}</MathJax>}
      </label>
      <label>
        {<MathJax>{"\\(\\gamma_{m}=\\)"}</MathJax>}
        <input name="moment" onChange={props.gammaM} />
        {<MathJax>{"\\([-]\\)"}</MathJax>}
      </label>
    </form>
  );
}

export default BendingInputs;
