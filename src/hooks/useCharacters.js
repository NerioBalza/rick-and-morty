import { useState, useEffect } from "react";
import { baseApiUrl } from "utils/contans";

const useCharacters = () => {
  const [data, setData] = useState({
    info: {},
    results: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [currentUrl, setCurrentUrl] = useState(baseApiUrl);

  const fetchCharacters = async (api) => {
    window.scrollTo(0, 0);
    setError(null);
    setData({ info: {}, results: [] });
    setLoading(true);
    await fetch(api)
      .then(async (res) => {
        const result = await res.json();
        if (result.error) throw new Error(result.error);
        setData(result);
      })
      .catch((error) => {
        setError(error.message);
      });
    setLoading(false);
  };

  const searchByFilter = () => {
    if (filter) {
      fetchCharacters(`${baseApiUrl}?name=${filter}`);
    } else {
      fetchCharacters(baseApiUrl);
    }
  };

  const searchPage = () => {};

  useEffect(() => {
    fetchCharacters(baseApiUrl);
  }, []);

  return {
    data,
    loading,
    error,
    filter,
    setFilter,
    searchByFilter,
  };
};

export default useCharacters;
