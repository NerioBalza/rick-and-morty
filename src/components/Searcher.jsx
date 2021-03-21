import React from "react";

const Searcher = ({ filter, onChange, onSearch }) => {
  return (
    <section className="searcher">
      <div className="searcher-container">
        <input
          onChange={onChange}
          className="searcher__input"
          id="searcher"
          type="text"
          placeholder="Search for a character"
          value={filter}
        />
        <button onClick={onSearch} className="searcher__button">
          <i className="icon-search"></i>
        </button>
      </div>
    </section>
  );
};

export default Searcher;
