import React from "react";
import { FaRedoAlt } from "react-icons/fa";

const RedoButton = (props) => {
  const { onClick } = props;

  return (
    <div className="redo-button">
      <button onClick={onClick}>
        <FaRedoAlt className="redo" />
      </button>
    </div>
  );
};

export default RedoButton;
