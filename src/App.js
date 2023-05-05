import "./assets/styles.css";
import React, { useState } from "react";
import Header from "./pages/Header/Header.js";
import { MathJaxContext } from "better-react-mathjax";
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  Router,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Zug from "./pages/Zug/Zug";
import Biegung from "./pages/Bending/Bending";
import Landing from "./pages/Landing/Landing";
import SinglePosition from "./pages/SinglePosition/SinglePosition";
import Positions from "./pages/Positions/Positions";
import Side from "./pages/Side/Side";
import Modal from "react-modal";
import uniqid from "uniqid";

// defining config for MathJax
// see react-better MathJax documentation
const config = {
  "fast-preview": {
    disabled: true,
  },
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
  messageStyle: "none",
};

function App() {
  /**
   * main data-structure
   *
   * projects-array -> each project-object has a positions-array containing the
   * positions (e.g. Stütze S-104, UZ-245) belonging to the project  ->
   * -> each positions-object has a calculations-array containing the calculations
   * belonging to the position -> each calculations-object contains the  inputs
   * and outputs of a calculation
   */
  const [projects, setProjects] = useState([
    {
      projectName: "test project 1",
      id: "prj-" + uniqid(),
      positionsArr: [
        {
          positionName: "name of position1",
          id: "posi-" + uniqid(),
          calculationsArr: [
            {
              calculationName: "Einachsiger Biegespannungsnachweis",
              myd: 4.09,
              b: 8,
              h: 22,
              kmod: 0.9,
              fmk: 24,
              gamma_m: 1.3,
              wy: 645.33,
              sigma_myd: 6.3,
              fmd: 16.6,
            },
          ],
        },
      ],
    },
    {
      projectName: "test project 2",
      id: "prj-" + uniqid(),
      positionsArr: [
        {
          positionName: "name of position2",
          id: "posi-" + uniqid(),
          calculationsArr: [
            {
              calculationName: "Einachsiger Biegespannungsnachweis",
              myd: 4.09,
              b: 8,
              h: 22,
              kmod: 0.9,
              fmk: 24,
              gamma_m: 1.3,
              wy: 645.33,
              sigma_myd: 6.3,
              fmd: 16.6,
            },
          ],
        },
      ],
    },
    {
      projectName: "test project 3",
      id: "prj-" + uniqid(),
      positionsArr: [
        {
          positionName: "name of position3",
          id: "posi-" + uniqid(),
          calculationsArr: [
            {
              calculationName: "Einachsiger Biegespannungsnachweis",
              myd: 4.09,
              b: 8,
              h: 22,
              kmod: 0.9,
              fmk: 24,
              gamma_m: 1.3,
              wy: 645.33,
              sigma_myd: 6.3,
              fmd: 16.6,
            },
          ],
        },
      ],
    },
  ]);

  /**
   * state for current chosen position
   *
   * save project id of the project the user wants to see the positions
   */
  const [currentProjectId, setCurrentProjectId] = useState("");

  /**
   * state for current chosen position
   */

  const [currentPositionId, setCurrentPositionId] = useState("");

  /**
   * create new empty project object
   * updates projects array with a new project
   * @param {string} projectName name of new project
   *
   * function to change Projects-array from a child component
   *
   */
  const setProjectsChild = (projectName) => {
    console.log("lol");
    setProjects([
      // copy old project-array
      ...projects,
      // add new project-object as last element
      {
        projectName: `${projectName}`,
        id: "prj-" + uniqid(),
        // position-array
        positionsArr: [
          // position-objects
          // {
          //   positionName: "",
          //   id: "posi-" + uniqid(),
          //   // calculations-array
          //   calculations: [],
          // },
        ],
      },
    ]);
  };

  /**
   * create a new position object and add position-object to specified project's
   * position-array
   * @param {string} projectId id of porject we want to add the position ton
   *
   * function to change positions-array from a child component
   * -> use function in ModalCrtPrj.js
   */
  const setPositionsChild = (projectId, newPositonName) => {
    console.log("lol");
    // get index of project we want to change the position in
    const currentProjectIndex = projects.findIndex(
      (prj) => prj.id === projectId
    );
    // create new object with the contents of the project we want to change
    const updatedProject = Object.assign({}, projects[currentProjectIndex]);
    // update positions-array with new empty position-object
    console.log(updatedProject);
    updatedProject.positionsArr = [
      ...updatedProject.positionsArr,
      {
        positionName: newPositonName,
        calculationsArr: [],
        id: "posi-" + uniqid(),
      },
    ];

    const updatedProjectsArray = [
      ...projects.slice(0, currentProjectIndex),
      updatedProject,
      ...projects.slice(currentProjectIndex + 1),
    ];

    setProjects(updatedProjectsArray);
  };

  /**
   *
   * @param {string} projectId id of project the user wants to see
   *
   * the user wants to see the positions of one project
   * we need to pass the id of the project the user wants to inspect
   * in order to do so we get the id from the user clicking on the project-link
   * in the sidebar and saving it to state. we can then access the the id in the
   * positions component by passing it as a prop
   *
   */
  const setCurrentProjectIdChild = (projectId) => {
    setCurrentProjectId(projectId);
  };

  // const naivgate = useNavigate();

  /**
   * delete project from projects array
   * pass function to child (side)
   * -- Add prompt so user needs to confirm deletion
   */
  const setPrjsChildDlt = (e) => {
    console.log(e.currentTarget.id);
    setProjects(projects.filter((prj) => prj.id !== e.currentTarget.id));

    // reset state for currentProjectId because the id does no exist after
    // corresponding project got deleted
    setCurrentProjectId("");
  };

  // const [pageNameArray, setPageNameArray] = useState(["Home"]);

  return (
    <div className="App" id="app--container">
      <BrowserRouter>
        {/* setting options to MathJax by passing props */}
        <MathJaxContext version={3} config={config}>
          <Header />

          <Side
            projects={projects}
            setProjectsChild={setProjectsChild}
            setPrjsChildDlt={setPrjsChildDlt}
            setCurrentProjectIdChild={setCurrentProjectIdChild}
          />
          <Routes>
            {/*             <Route path="/" element={<Landing />} /> */}

            {/* default page */}
            <Route path="/" element={<Home projects={projects} />} />
            {/* links */}
            <Route path="/home" element={<Home projects={projects} />} />
            <Route path="/biegung" element={<Biegung />} />
            <Route
              path="/positions"
              element={
                <Positions
                  projects={projects}
                  currentProjectId={currentProjectId}
                  setPositionsChild={setPositionsChild}
                />
              }
            />
            <Route
              path="/singlePosition"
              element={
                <SinglePosition
                  projects={projects}
                  currentPositionId={currentPositionId}
                />
              }
            />
            {/*             <Route path="/zug" element={<Zug />} /> */}
          </Routes>
        </MathJaxContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
