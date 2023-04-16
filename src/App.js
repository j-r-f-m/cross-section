import "./assets/styles.css";
import Header from "./pages/Header/Header.js";
import { MathJaxContext } from "better-react-mathjax";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Zug from "./pages/Zug/Zug";
import Biegung from "./pages/Bending/Bending";

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
