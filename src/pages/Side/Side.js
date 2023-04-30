import React, { useState } from "react";
import Modal from "react-modal";
import AddIcon from "@mui/icons-material/Add";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

/* add custom styles to react-modal */
const customStyles = {
  content: {},
  overlay: { zIndex: 1000 },
};

/**
 * sidebar component
 * user can naivgate through projects
 * @returns
 */
function Side(props) {
  const handlePlusBtn = (e) => {
    e.preventDefault();
    console.log("sidebar click");
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
            <li className="sidebar--list--element">
              {/*     <h2>{prj.name}</h2> */}

              <button className="sidebar--open--btn">{prj.name}</button>
              <button className="sidebar--dots--btn">
                <MoreHoriz />
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <Modal id="add--modal" isOpen={modalIsOpen} style={customStyles}>
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </>
  );
}

export default Side;
