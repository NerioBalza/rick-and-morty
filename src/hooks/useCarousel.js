import { useState, useEffect } from "react";

const useCarousel = (id) => {
  const baseApiUrl = "https://rickandmortyapi.com/api/character/";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);
    const idList = await setRandomCharacters();

    await fetch(baseApiUrl + idList)
      .then(async (res) => {
        const characters = await res.json();
        setData(characters);
      })
      .catch((error) => {
        setError(error.message);
      });

    setLoading(false);
  };

  const setRandomCharacters = async () => {
    const count = await fetch(baseApiUrl)
      .then(async (res) => {
        const data = await res.json();
        return data.info.count;
      })
      .catch((error) => {
        setError(error.message);
      });

    let idList = [];

    for (let i = 0; i < 6; i++) {
      const randomId = Math.floor(Math.random() * (count - 1 + 1) + 1);
      idList.push(randomId);
    }

    return idList.join(",");
  };

  const reload = () => {
    fetchCharacters();
  };

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const first = data[0];
    let newChList = data;
    newChList.shift(0);
    newChList.push(first);
    setData([...newChList]);
  };

  useEffect(() => {
    const carousel = document.getElementById(id);
    let interval = null;

    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      interval = setInterval(() => {
        carousel.scrollLeft = carousel.scrollLeft + 1;
      }, 10);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
        clearInterval(interval);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return {
    data,
    loading,
    error,
    reload,
  };
};

export default useCarousel;
