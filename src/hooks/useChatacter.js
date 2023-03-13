import { useState, useEffect } from "react";
import { baseApiUrl } from "utils/contans";

const useChatacter = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacter = async () => {
    setLoading(true);
    setError(null);
    await fetch(baseApiUrl + id)
      .then(async (res) => {
        const response = await res.json();
        setData(response);
      })
      .catch((error) => {
        setError(error.message);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useChatacter;
