import { MathJax } from "better-react-mathjax";
import { useState } from "react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

// import LatexInput from "../../components/LatexInput";
import { wy, fmd, sigmaMd } from "../../utils/bendingCalc";

function BendingInputs(props) {
  const [mydState, setMydState] = useState("");

  // const methods = useForm();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
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
    <form id="bending--inputs--form" onSubmit={(e) => e.preventDefault()}>
      <label>
        <MathJax id="myd">{"\\(M_{y,d} \\ [kNm] =\\)"}</MathJax>
      </label>
      <input
        type="number"
        id="myd--input"
        {...register("myd", {
          required: {
            value: true,
          },
        })}
      />
      {errors?.myd?.type === "required" && (
        <p className="input--error">Please enter a number</p>
      )}

      <label>
        <MathJax>{"\\(b \\ [cm]=\\)"}</MathJax>
      </label>
      <input
        type="number"
        {...register("b", {
          required: {
            value: true,
            message: "Please enter a number",
          },
        })}
      />
      {errors?.b?.type === "required" && (
        <p className="input--error">Please enter a number</p>
      )}
      <label>
        <MathJax>{"\\(h \\  [cm] =\\)"}</MathJax>
      </label>
      <input
        type="number"
        {...register("h", {
          required: {
            value: true,
            message: "Please enter a number",
          },
        })}
      />
      {errors?.h?.type === "required" && (
        <p className="input--error">Please enter a number</p>
      )}
      <label>
        <MathJax>{"\\(k_{mod} \\ [-] =\\)"}</MathJax>
      </label>
      <input
        type="number"
        {...register("kmod", {
          required: {
            value: true,
            message: "Please enter a number",
          },
        })}
      />
      {errors?.kmod?.type === "required" && (
        <p className="input--error">Please enter a number</p>
      )}
      <label>
        <MathJax>{"\\(f_{m,k} \\ [N/mm²] =\\)"}</MathJax>
      </label>
      <input
        type="number"
        {...register("fmk", {
          required: {
            value: true,
            message: "Please enter a number",
          },
        })}
      />
      {errors?.fmk?.type === "required" && (
        <p className="input--error">Please enter a number</p>
      )}
      <label>
        <MathJax>{"\\(\\gamma_{m} \\ [-] =\\)"}</MathJax>
      </label>
      <input
        type="number"
        {...register("gammaM", {
          required: {
            value: true,
            message: "Please enter a number",
          },
        })}
      />
      {errors?.gammaM?.type === "required" && (
        <p className="input--error">Please enter a number</p>
      )}

      <button onClick={onSubmit}>Calculate</button>
    </form>
  );
}

export default BendingInputs;

// return (
//   <FormProvider {...methods}>

//     {/* component based approach */}
//     <form
//       id="bending--inputs--container"
//       onSubmit={(e) => e.preventDefault()}
//       noValidate
//       className="form--container"
//     >
//       <h3>Inputs</h3>
//       <LatexInput
//         labelTxt={"\\(M_{y,d}=\\)"}
//         type="text"
//         unit={"\\([kNm]\\)"}
//         name={"myd"}
//       />
//       <hr />
//       <LatexInput
//         labelTxt={"\\(b=\\)"}
//         type="text"
//         unit={"\\([kNm]\\)"}
//         name={"b"}
//       />
//       <LatexInput
//         labelTxt={"\\(h=\\)"}
//         type="text"
//         unit={"\\([kNm]\\)"}
//         name={"h"}
//       />
//       <hr />
//       <LatexInput
//         labelTxt={"\\(k_{mod}=\\)"}
//         type="text"
//         unit={"\\([-]\\)"}
//         name={"kmod"}
//       />
//       <LatexInput
//         labelTxt={"\\(f_{m,k}=\\)"}
//         type="text"
//         unit={"\\([kNm]\\)"}
//         name={"fmk"}
//       />

//       <LatexInput
//         labelTxt={"\\(\\gamma_{m}=\\)"}
//         type="text"
//         unit={"\\([-]\\)"}
//         name={"gammaM"}
//       />

//       <button onClick={onSubmit}>Calculate</button>
//     </form>
//   </FormProvider>
// );
