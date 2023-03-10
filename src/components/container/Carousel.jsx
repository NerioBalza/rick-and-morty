import React, { useState, useEffect } from "react";

const Carousel = ({ id, label = "Random characters:" }) => {
  const apiURL = "https://rickandmortyapi.com/api/character/";
  const [loading, setLoading] = useState(true);
  const [carouselList, setCarouselList] = useState([]);
  const [error, setError] = useState(null);

  const fetchRandomCharacters = async (api) => {
    try {
      setLoading(true);
      setError(null);
      const responseCount = await fetch(api);
      const dataCount = await responseCount.json();
      const count = dataCount.info.count;
      let randomIdList = [];
      const min = 1;
      for (let i = 0; i < 5; i++) {
        const randomID = Math.floor(Math.random() * (count - min + 1) + min);
        randomIdList.push(randomID);
      }
      const randomList = randomIdList.join(",");
      const responseCharacters = await fetch(api + randomList);
      const data = await responseCharacters.json();
      setCarouselList(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
      setLoading(false);
    }
  };

  const handleScroll = (event) => {
    const carousel = event.target;
    const firstChild = carousel.childNodes[0];
    const rect = firstChild.getBoundingClientRect();

    if (rect.x <= -rect.width) {
      handleChangePos();
      carousel.scrollLeft = 0;
    }
  };

  const handleChangePos = () => {
    const first = carouselList[0];
    let newChList = carouselList;
    newChList.shift(0);
    newChList.push(first);
    setCarouselList([...newChList]);
  };

  useEffect(() => {
    fetchRandomCharacters(apiURL);
  }, []);

  useEffect(() => {
    const carousel = document.getElementById(id);
    let interval = null;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      interval = setInterval(() => {
        carousel.scrollLeft = carousel.scrollLeft + 1;
      }, 10);
    }

    // useEffect cleanup function
    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
        clearInterval(interval);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      <section className="carousel">
        <h2 className="carousel__title">{label}</h2>
        {!loading ? (
          <>
            {!error ? (
              <div className="carousel__list" id={id}>
                {carouselList.map((item) => {
                  return (
                    <div className="carousel-item" id={item.id} key={item.id}>
                      <figure className="carousel-item__image">
                        <img src={item.image} alt={item.name} />
                      </figure>
                      <div className="carousel-item__info">
                        <h3>{item.name}</h3>
                        <p>Status: {item.status}</p>
                        <p>Species: {item.species}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="carousel__error">
                <h2>{error}</h2>
                <button
                  onClick={() => {
                    fetchRandomCharacters(apiURL);
                  }}
                >
                  Try again
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="carousel__loader">
            <p>
              <i className="icon-load"></i>
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Carousel;
