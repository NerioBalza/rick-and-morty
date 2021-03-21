import React from "react";
import { Link } from "react-router-dom";

const CharacterItem = ({ characterInfo }) => {
  const { id, name, status, image } = characterInfo;

  let statusColor;

  switch (status) {
    case "Alive":
      statusColor = "green";
      break;
    case "Dead":
      statusColor = "red";
      break;
    default:
      statusColor = "gray";
      break;
  }
  return (
    <div className="character">
      <figure className="character-picture">
        <img src={image} alt={name + " Picture"} />
      </figure>
      <div className="character-container">
        <div className="character-info">
          <h2 className="character-info__title">{name}</h2>
          <p className="character-info__prg">
            Status: {status}
            <i className={statusColor + " status"}></i>
          </p>
        </div>
        <Link to={`/character/${id}`} className="character-link">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CharacterItem;
