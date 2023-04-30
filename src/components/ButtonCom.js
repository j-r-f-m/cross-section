import React from "react";

// simple button component
function ButtonCom(props) {
  return (
    <button type="button" onClick={props.passedFunction}>
      {props.passedContent}
    </button>
  );
}

export default ButtonCom;
