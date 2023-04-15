import { MathJax } from "better-react-mathjax";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header--container">
      <h1>Holzbau - Spannungsnachweise</h1>

      <ul id="link--container">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Zug
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
            Products
          </Link>
        </li>
        <li>
          {" "}
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Shopping Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
