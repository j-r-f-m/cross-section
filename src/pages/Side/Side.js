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
   * get project by id
   *
   */

  const getProjectById = (e) => {
    console.log(e.target.id);
    const searchedProject = props.projects.find(
      (prj) => prj.id === e.target.id
    );
    console.log(searchedProject);
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
              <Link
                id={`${prj.id}`}
                to="/positions"
                style={{ textDecoration: "none", color: "black" }}
                onClick={getProjectById}
              >
                {prj.projectName}
              </Link>
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
