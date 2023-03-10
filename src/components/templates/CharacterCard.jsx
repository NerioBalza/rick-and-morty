import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ characterInfo }) => {
  const { id, name, status, image, species } = characterInfo;

  return (
    <Link to={`/character/${id}`} className="Character-card">
      <figure className="Character-card__picture">
        <img src={image} alt={name + " Picture"} />
      </figure>
      <div className="Character-card__info">
        <h2>{name}</h2>
        <p>Species: {species}</p>
        <p>
          Status: {status}
          <i className={status + " status"}></i>
        </p>
      </div>
    </Link>
  );
};

export default CharacterCard;
