import React, { useState, useRef } from "react";
import { MathJax } from "better-react-mathjax";
import BtnCalc from "../../components/BtnCalc";
import { wy, fmd, sigmaMd } from "../../utils/bendingCalc";
function BendingInputs(props) {
  const inputRefMyd = useRef(null);
  const inputRefB = useRef(null);
  const inputRefH = useRef(null);
  const inputRefKmod = useRef(null);
  const inputRefFmk = useRef(null);
  const inputRefGammaM = useRef(null);

  const calculate = () => {
    const newWy = wy(
      Number(inputRefB.current.value),
      Number(inputRefH.current.value)
    );
    const newFmd = fmd(
      Number(inputRefKmod.current.value),
      Number(inputRefFmk.current.value),
      Number(inputRefGammaM.current.value)
    );
    const newSigmaMd = sigmaMd(Number(inputRefMyd.current.value), newWy);

    props.setStateChild(
      Number(inputRefMyd.current.value),
      Number(inputRefB.current.value),
      Number(inputRefH.current.value),
      Number(inputRefKmod.current.value),
      Number(inputRefFmk.current.value),
      Number(inputRefGammaM.current.value),
      newWy,
      newSigmaMd,
      newFmd
    );
  };

  return (
    <form id="bending--inputs--container">
      <h3>Inputs</h3>

      <label>
        {<MathJax>{"\\(M_{y,d}=\\)"}</MathJax>}
        <input type="text" name="myd" ref={inputRefMyd} />
        {<MathJax>{"\\([kNm]\\)"}</MathJax>}
      </label>
      <hr />
      <label>
        {<MathJax>{"\\(b=\\)"}</MathJax>}
        <input type="text" name="b" ref={inputRefB} />
        {<MathJax>{"\\([cm]\\)"}</MathJax>}
      </label>
      <label>
        {<MathJax>{"\\(h=\\)"}</MathJax>}
        <input type="text" name="h" ref={inputRefH} />
        {<MathJax>{"\\([cm]\\)"}</MathJax>}
      </label>
      <hr />
      <label>
        {<MathJax>{"\\(k_{mod}=\\)"}</MathJax>}
        <input type="text" name="kmod" ref={inputRefKmod} />
        {<MathJax>{"\\([kN]\\)"}</MathJax>}
      </label>
      <label>
        {<MathJax>{"\\(f_{m,k}=\\)"}</MathJax>}
        <input type="text" name="fmk" ref={inputRefFmk} />
        {<MathJax>{"\\([N/mm²]\\)"}</MathJax>}
      </label>
      <label>
        {<MathJax>{"\\(\\gamma_{m}=\\)"}</MathJax>}
        <input type="text" name="gammaM" ref={inputRefGammaM} />
        {<MathJax>{"\\([-]\\)"}</MathJax>}
      </label>
      <BtnCalc calculate={calculate} />
    </form>
  );
}

export default BendingInputs;
