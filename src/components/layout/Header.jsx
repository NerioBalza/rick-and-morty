import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/images/portal-logo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo rick and morty" />
      </Link>
    </header>
  );
};

export default Header;
