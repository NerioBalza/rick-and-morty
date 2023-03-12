import { useState, useEffect } from "react";
import { baseApiUrl } from "utils/contans";

const useCharacters = () => {
  const [data, setData] = useState({
    info: { pages: 0 },
    results: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const fetchCharacters = async (api) => {
    window.scrollTo(0, 0);
    setError(null);
    setData({ info: { pages: 0 }, results: [] });
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
    setPage(1);
    if (filter) {
      fetchCharacters(`${baseApiUrl}?name=${filter}`);
    } else {
      fetchCharacters(baseApiUrl);
    }
  };

  const searchPage = (api, page) => {
    setPage(page);
    fetchCharacters(api);
  };

  useEffect(() => {
    fetchCharacters(baseApiUrl);
  }, []);

  return {
    data,
    loading,
    error,
    filter,
    page,
    setFilter,
    searchByFilter,
    searchPage,
  };
};

export default useCharacters;
