import React, { useState } from "react";
import BendingInputs from "./BendingInputs";
import BendingOutputs from "./BendingOutputs";
import BtnCalc from "../../components/BtnCalc";
import { wy, fmd, sigmaMd } from "../../utils/bendingCalc";

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

  const getMyd = (e) => {
    setState({
      ...state,
      data: {
        ...state.data,
        myd: Number(e.target.value),
      },
    });
  };

  const getB = (e) => {
    setState({
      ...state,
      data: {
        ...state.data,
        b: Number(e.target.value),
      },
    });
  };

  const getH = (e) => {
    setState({
      ...state,
      data: {
        ...state.data,
        h: Number(e.target.value),
      },
    });
  };

  const getKmod = (e) => {
    setState({
      ...state,
      data: {
        ...state.data,
        kmod: Number(e.target.value),
      },
    });
  };

  const getFmk = (e) => {
    setState({
      ...state,
      data: {
        ...state.data,
        fmk: Number(e.target.value),
      },
    });
  };

  const gammaM = (e) => {
    setState({
      ...state,
      data: {
        ...state.data,
        gamma_m: Number(e.target.value),
      },
    });
  };

  const startCalculation = () => {
    console.log(state.data.b);
    const newWy = wy(state.data.b, state.data.h);
    const newFmd = fmd(state.data.kmod, state.data.fmk, state.data.gamma_m);
    const newSigmaMd = sigmaMd(state.data.myd, state.data.wy);

    setState({
      ...state,
      data: {
        ...state.data,
        wy: newWy,
        fmd: newFmd,
        sigma_myd: newSigmaMd,
      },
    });
  };

  return (
    <div id="bending--container">
      <h2>Einachsiger Biegespannungsnachweis:</h2>
      <BendingInputs
        getMyd={getMyd}
        getB={getB}
        getH={getH}
        getKmod={getKmod}
        getFmk={getFmk}
        gammaM={gammaM}
      />
      <BtnCalc startCalculation={startCalculation} />
      <BendingOutputs state={state} />
    </div>
  );
}

export default Bending;
