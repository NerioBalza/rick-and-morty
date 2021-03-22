import React from "react";

const CharacterCard = ({ data }) => {
  const { name, status, species, gender, image, origin } = data;

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
    <div className="character-card">
      <figure className="character-card__image">
        <img src={image} alt="" />
      </figure>

      <div className="character-card__details">
        <h2 className="name">{name}</h2>
        <p className="info">
          {"Status: " + status}
          <i className={statusColor + " status"}></i>
        </p>
        <p className="info">{"Gender: " + gender}</p>
        <p className="info">{"Species: " + species}</p>
        <p className="info">{"Origin: " + origin.name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
