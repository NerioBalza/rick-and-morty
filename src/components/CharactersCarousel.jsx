import React, { useState, useEffect } from "react";

const CharactersCarousel = ({ id, label = "Random Characters", classname }) => {
  const [charactersList, setCharactersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiURL = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    fetchRandomCharacters(apiURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRandomCharacters = async (api) => {
    try {
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
      setCharactersList(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeCharacterPos = () => {
    const first = charactersList[0];
    const last = charactersList[charactersList.length - 1];
    let newChList = charactersList;

    if (!classname) {
      newChList.shift(0);
      newChList.push(first);
    } else {
      newChList.pop();
      newChList.unshift(last);
    }
    setCharactersList([...newChList]);
  };

  useEffect(() => {
    if (!loading) {
      const wrapper = document.getElementById(id);
      if (wrapper) {
        wrapper.onanimationiteration = () => {
          changeCharacterPos();
        };
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <section className="ch-carousel">
      <h2 className="ch-carousel__title">{label}</h2>
      <div className="ch-carousel__container">
        {loading ? (
          <>
            <div className="ch-carousel__loader">
              <i className="icon-load"></i>
            </div>
          </>
        ) : (
          <div className={`ch-carousel__wrapper ${classname}`} id={id}>
            {charactersList.map((character) => {
              return (
                <div className="character" key={character.id} id={character.id}>
                  <figure className="character__img">
                    <img src={character.image} alt={character.name} />
                  </figure>
                  <div className="character__info">
                    <h3>{character.name}</h3>
                    <p>{"Species: " + character.species}</p>
                    <p>{"Status: " + character.status}</p>
                    <p>{"Gender: " + character.gender}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CharactersCarousel;
