import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

function Header() {
  return (
    <div id="header--container">
      <div id="header--left--container">
        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          <HomeIcon id="header--home--icon" />{" "}
        </Link>

        <h1>Holzbau - Spannungsnachweise</h1>
      </div>

      <ul id="link--container">
        {/*         <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Landing
          </Link>
        </li> */}
        <li>
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </li>
        {/*         <li>
          <Link to="/zug" style={{ textDecoration: "none", color: "black" }}>
            Zug
          </Link>
        </li> */}
        <li>
          <Link
            to="/biegung"
            style={{ textDecoration: "none", color: "black" }}
          >
            Biegung
          </Link>
        </li>
        <LogoutIcon />
      </ul>
    </div>
  );
}

export default Header;
