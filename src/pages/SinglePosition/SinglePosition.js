import React from "react";

function SinglePosition(props) {
  const searchedProject = props.projects.find(
    (prj) => prj.id === props.currentProjectId
  );

  // initilize searchPositon variable
  let searchedPosition = null;
  // since searchPosition can get called before searchProject finishes executing
  // we wrap it in a try block to prevent fatal crash
  // maybe I can use an async-function
  // Can we replace try block with asyn function?
  try {
    const searchPosition = searchedProject.positionsArr.find(
      (posi) => posi.id === props.currentPositionId
    );
    searchedPosition = searchPosition;
  } catch (error) {}

  console.log(props.currentProjectId);
  console.log(searchedProject);
  console.log(searchedPosition);

  return (
    <div className="main--container">
      {props.currentProjectId && searchedPosition.positionName ? (
        <h2 className="heading--main">
          Project: {searchedProject.projectName} - Position:{" "}
          {searchedPosition.positionName}
        </h2>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SinglePosition;
