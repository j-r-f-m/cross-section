import "./assets/styles.css";
import React, { useState } from "react";
import Header from "./pages/Header/Header.js";
import { MathJaxContext } from "better-react-mathjax";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Zug from "./pages/Zug/Zug";
import Biegung from "./pages/Bending/Bending";
import Landing from "./pages/Landing/Landing";
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
   * projects-array -> project-objects with calculations-array ->
   * -> calculations-array -> objects containing calculation inputs and outputs
   */
  const [projects, setProjects] = useState([
    {
      projectName: "test project 1",
      id: uniqid(),
      positionsArr: [
        {
          positionName: "name of position",
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
   * updates projects array with a new project
   * @param {string} projectName give new project a name
   *
   * function to change Projects from a child component
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
        id: uniqid(),
        // position-array
        positionsArr: [
          // position-objects
          {
            positionName: "",
            // calculations-array
            calculations: [],
          },
        ],
      },
    ]);
  };

  /**
   * delete project from projects array
   * pass function to child (side)
   */
  const setPrjsChildDlt = (e) => {
    console.log(e.currentTarget.id);
    setProjects(projects.filter((prj) => prj.id !== e.currentTarget.id));
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
          />
          <Routes>
            {/*             <Route path="/" element={<Landing />} /> */}
            <Route path="/home" element={<Home projects={projects} />} />
            <Route path="/biegung" element={<Biegung />} />
            {/*             <Route path="/zug" element={<Zug />} /> */}
          </Routes>
        </MathJaxContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
