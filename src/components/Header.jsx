import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <figure className="logo-container">
            <img
              className="logo-container__image"
              src={logo}
              alt="logo rick and morty"
            />
          </figure>
        </Link>
      </div>
      <div className="search">
        <label htmlFor="searcher" className="search-label">
          <i className="icon-search icon"></i>
        </label>
      </div>
    </header>
  );
};

export default Header;
