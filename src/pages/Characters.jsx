import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";

import Loader from "../components/Loader";
import CharacterCard from "../components/CharacterCard";
import Searcher from "../components/Searcher";
import PageButtons from "../components/PageButtons";

const Characters = () => {
  const apiUrl = "https://rickandmortyapi.com/api/character/";

  const [pageData, setPageData] = useState({
    isLoading: true,
    info: {},
    results: [],
    error: null,
    currentLink: apiUrl,
    filter: "",
    currentPage: 1,
  });

  const { isLoading, results, info, filter, currentLink, currentPage, error } =
    pageData;

  useEffect(() => {
    searchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCharacterData = async (url, page = 1) => {
    window.scrollTo(0, 0);
    setPageData({
      ...pageData,
      isLoading: true,
      results: [],
      error: null,
    });

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPageData({
        ...pageData,
        isLoading: false,
        results: data.results,
        info: data.info,
        currentPage: page,
        currentLink: url,
        error: null,
      });
    } catch (error) {
      setPageData({
        ...pageData,
        isLoading: false,
        error: error,
        currentPage: page,
        currentLink: url,
      });
    }
  };

  const handleChangeFilter = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setPageData({
      ...pageData,
      filter: filterValue,
    });
  };

  const searchCharacters = () => {
    if (filter === "") {
      fetchCharacterData(apiUrl);
    } else {
      fetchCharacterData(`${apiUrl}?name=${filter}`);
    }
  };

  const searchPage = (event) => {
    const page = parseInt(event.target.value);
    if (filter === "") {
      fetchCharacterData(`${apiUrl}?page=${page}`, page);
    } else {
      fetchCharacterData(`${apiUrl}?page=${page}&name=${filter}`, page);
    }
  };

  const refreshPage = () => {
    fetchCharacterData(currentLink, currentPage);
  };

  return (
    <Layout className="Characters">
      {!isLoading ? (
        <>
          {!error ? (
            <>
              <Searcher
                onClick={searchCharacters}
                onChange={handleChangeFilter}
                filter={filter}
              />

              <section className="Characters__list">
                {results.map((character) => {
                  return (
                    <CharacterCard
                      key={character.id}
                      characterInfo={character}
                    />
                  );
                })}
              </section>

              <PageButtons
                info={info}
                onClick={searchPage}
                page={currentPage}
              />
            </>
          ) : (
            <section className="Characters__error">
              <button onClick={refreshPage}>
                <i className="icon-refresh-2"></i>
              </button>
            </section>
          )}
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Characters;
