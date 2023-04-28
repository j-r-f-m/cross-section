import React, { useState } from "react";
import BendingInputs from "./BendingInputs";
import BendingOutputs from "./BendingOutputs";

function Bending() {
  // object that holds data for calculation
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

  /**
   * setState function save data for the calculation
   * wrapping setState in a function allows us to pass it as a prop to a child
   * component. Now we can manipulate the state of the parent component from the
   * child component.
   * @param {number} iptMyd
   * @param {number} iptB
   * @param {number} iptH
   * @param {number} iptKmod
   * @param {number} iptFmk
   * @param {number} iptGammaM
   * @param {number} iptWy
   * @param {number} iptSigmaMd
   * @param {number} iptFmd
   */
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
      <h2 className="bending--h2">Einachsiger Biegespannungsnachweis:</h2>

      <div id="bending--container--flex">
        <BendingInputs setStateChild={setStateChild} />
        {/* <BtnCalc startCalculation={startCalculation} /> */}
        <BendingOutputs state={state} />
      </div>
    </div>
  );
}

export default Bending;
