import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const { data } = props;
  const { id, name, status, image, species } = data;

  return (
    <Link to={`/character/${id}`} className="character-card">
      <figure className="character-card__image">
        <img src={image} alt={name} />
      </figure>

      <div className="character-card__data">
        <h3>{name}</h3>
        <div>
          <p>Species: {species}</p>
          <p>Status: {status}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
