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
  // main data structure
  const [projects, setProjects] = useState([
    {
      name: "test project 1",
      positions: [
        {
          name: "name of position",
          calculations: [
            {
              name: "Einachsiger Biegespannungsnachweis",
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

  // const [pageNameArray, setPageNameArray] = useState(["Home"]);

  return (
    <div className="App" id="app--container">
      <BrowserRouter>
        {/* setting options to MathJax by passing props */}
        <MathJaxContext version={3} config={config}>
          <Header />
          <Side projects={projects} />
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
