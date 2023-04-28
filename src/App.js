import "./assets/styles.css";
import Header from "./pages/Header/Header.js";
import { MathJaxContext } from "better-react-mathjax";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Zug from "./pages/Zug/Zug";
import Biegung from "./pages/Bending/Bending";
import Landing from "./pages/Landing/Landing";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

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
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="App">
      <BrowserRouter>
        {/* setting options to MathJax by passing props */}
        <MathJaxContext version={3} config={config}>
          <Header />
          <Sidebar id="sidebar--container" style={{ height: "100vh" }}>
            <Menu>
              <MenuItem
                icon={<MenuOutlinedIcon />}
                onClick={() => {
                  collapseSidebar();
                }}
                style={{ textAlign: "center" }}
              >
                {" "}
                <h2>Admin</h2>
              </MenuItem>
            </Menu>
          </Sidebar>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/zug" element={<Zug />} />
            <Route path="/biegung" element={<Biegung />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </MathJaxContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
