import React, { useRef } from "react";
import { MathJax } from "better-react-mathjax";

import BtnCalc from "../../components/BtnCalc";
import LatexInput from "../../components/LatexInput";
import { wy, fmd, sigmaMd } from "../../utils/bendingCalc";

function BendingInputs(props) {
  // use href to access dom elemnt directly
  const inputRefMyd = useRef(null);
  const inputRefB = useRef(null);
  const inputRefH = useRef(null);
  const inputRefKmod = useRef(null);
  const inputRefFmk = useRef(null);
  const inputRefGammaM = useRef(null);

  const calculate = () => {
    // call functions that calculate the wanted result
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

    // set state of parent component
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
      <LatexInput
        variable={"\\(M_{y,d}=\\)"}
        inputName={"myd"}
        inputRef={inputRefMyd}
        unit={"\\([kNm]\\)"}
      />
      <hr />
      <LatexInput
        variable={"\\(b=\\)"}
        inputName={"b"}
        inputRef={inputRefB}
        unit={"\\([kNm]\\)"}
      />
      <LatexInput
        variable={"\\(h=\\)"}
        inputName={"h"}
        inputRef={inputRefH}
        unit={"\\([kNm]\\)"}
      />
      <hr />
      <LatexInput
        variable={"\\(k_{mod}=\\)"}
        inputName={"kmod"}
        inputRef={inputRefKmod}
        unit={"\\([-]\\)"}
      />
      <LatexInput
        variable={"\\(f_{m,k}=\\)"}
        inputName={"fmk"}
        inputRef={inputRefFmk}
        unit={"\\([kNm]\\)"}
      />

      <LatexInput
        variable={"\\(\\gamma_{m}=\\)"}
        inputName={"gammaM"}
        inputRef={inputRefGammaM}
        unit={"\\([-]\\)"}
      />

      <BtnCalc calculate={calculate} />
    </form>
  );
}

export default BendingInputs;
