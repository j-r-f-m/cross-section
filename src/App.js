import "./assets/styles.css";
import Header from "./pages/Header/Header.js";
import { MathJaxContext } from "better-react-mathjax";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Zug from "./pages/Zug/Zug";
import Biegung from "./pages/Bending/Bending";
import Landing from "./pages/Landing/Landing";

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
  return (
    <div className="App">
      <BrowserRouter>
        {/* setting options to MathJax by passing props */}
        <MathJaxContext version={3} config={config}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zug" element={<Zug />} />
            <Route path="/biegung" element={<Biegung />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </MathJaxContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
