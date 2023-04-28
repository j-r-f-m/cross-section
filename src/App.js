import "./assets/styles.css";
import Header from "./pages/Header/Header.js";
import { MathJaxContext } from "better-react-mathjax";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Zug from "./pages/Zug/Zug";
import Biegung from "./pages/Bending/Bending";
import Landing from "./pages/Landing/Landing";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ProSidebarProvider } from "react-pro-sidebar";

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
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/biegung" element={<Biegung />} />
            <Route path="/zug" element={<Zug />} />
          </Routes>
        </MathJaxContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
