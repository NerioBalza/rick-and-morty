import React from "react";

const CarouselCard = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { data } = props;

  return (
    <div className="carousel-card">
      <figure className="carousel-card__image">
        <img src={data.image} alt={data.name} />
      </figure>

      <div className="carousel-card__data">
        <h3>{data.name}</h3>
        <div>
          <p>Status: {data.status}</p>
          <p>Species: {data.species}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
