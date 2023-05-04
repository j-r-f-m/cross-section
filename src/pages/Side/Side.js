import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import ModalCrtPrj from "../../components/ModalCrtPrj";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

/**
 * sidebar component
 * user can naivgate through projects
 * @returns
 */
function Side(props) {
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
   * set state for setCurrentProjectId in App.js
   * save the id of the project the user selected by clicking on the link in the
   * sidebar
   * get id from the "Link" dom element
   * @param {object} e event-object from button click
   */

  const getProjectById = (e) => {
    const searchedProject = props.projects.find(
      (prj) => prj.id === e.target.id
    );
    // set state for setCurrentProjectId in App.js
    props.setCurrentProjectIdChild(searchedProject.id);
  };

  return (
    <>
      <aside id="sidebar--container">
        <div id="sidebar--heading">
          <h2 id="sidebar--h2">Projects</h2>
          <button id="sidebar--button--plus" onClick={openModal}>
            <AddIcon id="sidebar--plus--btn" />
          </button>
        </div>

        <ul id="sidebar--list">
          {props.projects.map((prj) => (
            <li key={prj.id} className="sidebar--list--element">
              {/* change button to link for navigation */}
              {/* <button className="sidebar--open--btn">{prj.projectName}</button> */}

              {/* link to Positions.js */}
              <Link
                id={`${prj.id}`}
                to="/positions"
                style={{ textDecoration: "none", color: "black" }}
                onClick={getProjectById}
              >
                {prj.projectName}
              </Link>
              {/* delete button */}
              <button className="sidebar--dots--btn">
                <CloseIcon id={prj.id} onClick={props.setPrjsChildDlt} />
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <ModalCrtPrj
        /**
         *  pass parent state and function to manipulate parent state to child
         *  component as props
         *  */
        closeModalChild={closeModalChild}
        modalIsOpen={modalIsOpen}
        setProjectChild={props.setProjectsChild}
      />
    </>
  );
}

export default Side;
