import "./styles/styles.css";
import Header from "./components/Header.js";
import { MathJaxContext } from "better-react-mathjax";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Zug from "./components/Zug";
import Biegung from "./components/Biegung";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MathJaxContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zug" element={<Zug />} />
            <Route path="/biegung" element={<Biegung />} />
          </Routes>
        </MathJaxContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
