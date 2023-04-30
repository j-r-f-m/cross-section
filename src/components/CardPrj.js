import React from "react";

function CardPrj(props) {
  console.log(props.projects);
  return (
    <div className="card--prj--container">
      <h3>hi</h3>
      <h2>{props.projects}</h2>
    </div>
  );
}

export default CardPrj;
