import React from "react";
import { FaSearch } from "react-icons/fa";

const Searcher = ({ onClick, onChange, value }) => {
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    onChange(value);
  };

  return (
    <div className="searcher">
      <input
        id="searcher"
        name="searcher"
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Rick Sanchez..."
        autoComplete="off"
        maxLength="25"
      />

      <button onClick={onClick}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Searcher;
