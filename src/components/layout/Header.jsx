import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import logo from "assets/images/portal-logo.png";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const { back } = props;
  const navigate = useNavigate();
  return (
    <header className="header">
      <div
        className="header__back"
        onClick={() => {
          navigate(-1);
        }}
      >
        {back && (
          <button>
            <FaAngleLeft />
          </button>
        )}
      </div>

      <Link to="/">
        <img className="header__logo" src={logo} alt="logo rick and morty" />
      </Link>

      <div className="header__blank"></div>
    </header>
  );
};

Header.defaultProps = {
  back: false,
};

export default Header;
