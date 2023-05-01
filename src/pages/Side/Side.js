import React, { useState } from "react";
import Modal from "react-modal";
import AddIcon from "@mui/icons-material/Add";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

/* add custom styles to react-modal */
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "lightgrey",
    minWidth: "25rem",
  },
  overlay: { zIndex: 1000 },
};

/**
 * sidebar component
 * user can naivgate through projects
 * @returns
 */
function Side(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  /* form */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  /* modal functions */
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handlePlusBtn = (e) => {
    e.preventDefault();
    console.log("sidebar click");
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
            <li key={prj.name} className="sidebar--list--element">
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
        <header
          className="modal--header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Create a new Project</h2>
          <button
            id="modal--close--btn"
            onClick={closeModal}
            style={{
              border: "none",
              padding: "0px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "lightgrey",
              ":hover": {
                backgroundColor: "grey",
              },
            }}
          >
            {<CloseIcon />}
          </button>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Project Name:"
            {...register("prjName:", { required: true, max: 50 })}
          />
          {errors?.prjName?.type === "required" && (
            <p className="input--error">Please enter a number</p>
          )}

          <input type="submit" />
        </form>
      </Modal>
    </>
  );
}

export default Side;
