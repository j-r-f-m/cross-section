import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import LatexInput from "../../components/LatexInput";
import { wy, fmd, sigmaMd } from "../../utils/bendingCalc";

function BendingInputs(props) {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    console.log(data.b);
    // call functions that calculate the wanted result
    const newWy = wy(Number(data.b), Number(data.h));
    const newFmd = fmd(
      Number(data.kmod),
      Number(data.fmk),
      Number(data.gammaM)
    );
    const newSigmaMd = sigmaMd(Number(data.myd), newWy);

    // set state of parent component
    props.setStateChild(
      Number(data.myd),
      Number(data.b),
      Number(data.h),
      Number(data.kmod),
      Number(data.fmk),
      Number(data.gammaM),
      newWy,
      newSigmaMd,
      newFmd
    );
  });

  return (
    <FormProvider {...methods}>
      <form
        id="bending--inputs--container"
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="form--container"
      >
        <h3>Inputs</h3>
        <LatexInput
          labelTxt={"\\(M_{y,d}=\\)"}
          type="text"
          unit={"\\([kNm]\\)"}
          name={"myd"}
        />
        <hr />
        <LatexInput
          labelTxt={"\\(b=\\)"}
          type="text"
          unit={"\\([kNm]\\)"}
          name={"b"}
        />
        <LatexInput
          labelTxt={"\\(h=\\)"}
          type="text"
          unit={"\\([kNm]\\)"}
          name={"h"}
        />
        <hr />
        <LatexInput
          labelTxt={"\\(k_{mod}=\\)"}
          type="text"
          unit={"\\([-]\\)"}
          name={"kmod"}
        />
        <LatexInput
          labelTxt={"\\(f_{m,k}=\\)"}
          type="text"
          unit={"\\([kNm]\\)"}
          name={"fmk"}
        />

        <LatexInput
          labelTxt={"\\(\\gamma_{m}=\\)"}
          type="text"
          unit={"\\([-]\\)"}
          name={"gammaM"}
        />

        <button onClick={onSubmit}>Calculate</button>
      </form>
    </FormProvider>
  );
}

export default BendingInputs;
