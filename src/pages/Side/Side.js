import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import ModalCrtPrj from "../../components/ModalCrtPrj";

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
            <li key={prj.projectName} className="sidebar--list--element">
              <button className="sidebar--open--btn">{prj.projectName}</button>
              <button className="sidebar--dots--btn">
                <MoreHoriz />
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
