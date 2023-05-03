import React from "react";

function Positions(props) {
  const getProjectById = () => {
    // console.log(e.target.id);
    // const searchedProject = props.projects.find(
    //   (prj) => prj.id === e.target.id
    // );
    // console.log(searchedProject);
    // console.log("hi");
    // const searchedProject = props.projects.find(
    //   (prj) => prj.id === e.target.id
    // );
  };

  const searchedProject = props.projects.find(
    (prj) => prj.id === props.currentProjectId
  );

  function PositionShow({ show }) {
    if (show && searchedProject.projectName) {
      return (
        <div>
          <p>{searchedProject.projectName}</p>
          {searchedProject.positionsArr.map((posi) => (
            <div key={posi.positionName} className="home--prj--card">
              <h2>{posi.positionName}</h2>
            </div>
          ))}
        </div>
      );
    }
    return <h1>Positions - </h1>;
  }

  const positonArrTest = getProjectById(console.log(searchedProject));
  return (
    <div id="positions--container">
      {/* {searchedProject.positionsArr.map((posi) => (
        <div key={posi.positionName} className="home--prj--card">
          <h2>{posi.positionName}</h2>
        </div>
      ))} */}
      <PositionShow show={props.currentProjectId} />
      <p>{console.log(searchedProject)}</p>
    </div>
  );
}

export default Positions;
