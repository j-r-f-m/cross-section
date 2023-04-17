import React, { useState } from "react";
import BendingInputs from "./BendingInputs";
import BendingOutputs from "./BendingOutputs";

function Bending() {
  const [state, setState] = useState({
    data: {
      myd: 0,
      b: 0,
      h: 0,
      kmod: 0,
      fmk: 0,
      gamma_m: 0,
      wy: 0,
      sigma_myd: 0,
      fmd: 0,
    },
  });

  const setStateChild = (
    iptMyd,
    iptB,
    iptH,
    iptKmod,
    iptFmk,
    iptGammaM,
    iptWy,
    iptSigmaMd,
    iptFmd
  ) => {
    setState({
      ...state,
      data: {
        ...state.data,
        myd: iptMyd,
        b: iptB,
        h: iptH,
        kmod: iptKmod,
        fmk: iptFmk,
        gamma_m: iptGammaM,
        wy: iptWy,
        sigma_myd: iptSigmaMd,
        fmd: iptFmd,
      },
    });
  };

  return (
    <div id="bending--container">
      <h2>Einachsiger Biegespannungsnachweis:</h2>
      <BendingInputs setStateChild={setStateChild} />
      {/* <BtnCalc startCalculation={startCalculation} /> */}
      <BendingOutputs state={state} />
    </div>
  );
}

export default Bending;
