import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="Header-logo">
        <figure>
          <img src={logo} alt="logo rick and morty" />
        </figure>
      </Link>
    </header>
  );
};

export default Header;
