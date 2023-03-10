import React from "react";
import { Loader, RedoButton, CarouselCard } from "components";
import useCarousel from "hooks/useCarousel";

const Carousel = ({ id }) => {
  const { data, loading, error, reload } = useCarousel(id);

  return (
    <div className="carousel">
      {!loading ? (
        <>
          {!error ? (
            <div className="carousel__list" id={id}>
              {data.map((char, i) => (
                <CarouselCard data={char} key={i} />
              ))}
            </div>
          ) : (
            <RedoButton onClick={reload} />
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Carousel;
