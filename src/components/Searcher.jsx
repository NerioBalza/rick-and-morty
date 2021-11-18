import React from "react";

const Searcher = ({ onClick, onChange, filter }) => {
  return (
    <section className="Searcher">
      <input
        id="Searcher"
        name="Searcher"
        type="text"
        onChange={onChange}
        value={filter}
        placeholder="..."
        autoComplete="off"
        maxLength="25"
      />
      <button onClick={onClick}>
        <i className="icon-search"></i>
      </button>
    </section>
  );
};

export default Searcher;
