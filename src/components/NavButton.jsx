import React from "react";

const NavButton = ({ link, children, loadMore, disable }) => {
  return (
    <button
      onClick={() => {
        loadMore(link);
      }}
      className="nav-button"
      id={disable ? "disable" : ""}
    >
      {children}
    </button>
  );
};

export default NavButton;
