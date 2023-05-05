import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";

function ModalCrtPrj(props) {
  //   const [modalIsOpen, setIsOpen] = useState(false);

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
    // overlay of modal defaults to z-index = 0
    overlay: { zIndex: 1000 },
  };
  /* form */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // create const to save registerOptions -> cleaner code
  const registerOptions = {
    required: {
      value: true,
      message: "Please enter a name",
    },
  };

  // functions need to be passed from parent
  const onFormSubmit = (data) => {
    console.log(data.projectName);

    props.setProjectChild(data.projectName);
    props.closeModalChild();
    reset();
  };

  const onFormError = (errors) => console.error(errors);

  return (
    <Modal
      // I dont think it mattes where this line is added?!
      appElement={document.getElementById("sidebar--container")}
      id="add--modal"
      isOpen={props.modalIsOpen}
      style={customStyles}
    >
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
          onClick={props.closeModalChild}
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

      <form
        id="form--create--project"
        onSubmit={handleSubmit(onFormSubmit, onFormError)}
      >
        <div id="input--container">
          <label>Project Name:</label>
          <input
            name="projectName"
            type="text"
            placeholder="Project Name:"
            {...register("projectName", registerOptions)}
          />
        </div>

        {errors?.projectName && (
          <p className="input--error">Please enter a project name</p>
        )}

        <input type="submit" value="Create Project" />
      </form>
    </Modal>
  );
}

export default ModalCrtPrj;
