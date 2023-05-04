import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ModalCreatePosition from "../../components/ModalCreatePosition";
/**
 * Positions.js gets called when user clicks on project-link in the sidebar
 * user wants to access the different positions belonging to a project
 * @param {*} props
 * @returns
 */
function Positions(props) {
  // state for modal
  const [modalIsOpen, setIsOpen] = useState(false);

  /**
   * manipulate function from ModalCrtPrj.js
   * pass a function with the ability to change state of the parent component
   * to a child component
   */
  const closeModalChild = () => {
    setIsOpen(false);
  };

  /**
   * open ModalCrtPrj.js
   */
  function openModal() {
    setIsOpen(true);
  }

  /**
   *  gets fired when Postions.js is called
   *  find project by passed project-id ("props.currentProjectId")
   *  we need the project object the user wants to see in order to access the
   *  positons-array
   *  if seachedProject is undefined then no other project exists
   */
  const searchedProject = props.projects.find(
    (prj) => prj.id === props.currentProjectId
  );

  /**
   *
   * if the passeed string is not empty
   * @param {object} param0 object containing project-id string
   * @returns positions of clicked project or an empty scrren
   * if state of "currentProjectId" is truthy (empty string is falsy "" = flasy)
   * a project has been clicked by the user -> show positons of clicked project
   *
   * if searchedProject.projectName is truthy a project with an id-string that
   * equals the state string currenProjectId still exists
   *
   */
  function PositionShow({ currentProjectId }) {
    if (currentProjectId && searchedProject.projectName) {
      return (
        <>
          <h2 className="positions--heading">{searchedProject.projectName}</h2>
          {searchedProject.positionsArr.map((posi) => (
            <div key={posi.positionName} className="card">
              <h2>{posi.positionName}</h2>
            </div>
          ))}
          <button className="add--position--btn" onClick={openModal}>
            <p>Add Position </p>
            <AddIcon />
          </button>
        </>
      );
    }
    return (
      <h2 className="positions--heading">
        Select Project or create new Project
      </h2>
    );
  }

  return (
    <>
      <div id="positions--container">
        <PositionShow currentProjectId={props.currentProjectId} />
        {/* <p>{console.log(searchedProject)}kk</p> */}
      </div>

      <ModalCreatePosition
        closeModalChild={closeModalChild}
        modalIsOpen={modalIsOpen}
        setPositionsChild={props.setPositionsChild}
        currentProjectId={props.currentProjectId}
      />
    </>
  );
}

export default Positions;