import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import Loader from "../components/Loader";

const CharacterProfile = (props) => {
  const apiUrl = "https://rickandmortyapi.com/api/character/";
  let params = useParams();

  const [pageData, setPageData] = useState({
    isLoading: true,
    data: {},
    error: null,
  });
  const { isLoading, data } = pageData;

  useEffect(() => {
    const id = params.id;
    fetchCharacterData(apiUrl + id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCharacterData = async (url) => {
    window.scrollTo(0, 0);
    setPageData({
      isLoading: true,
    });
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPageData({
        isLoading: false,
        data: data,
      });
    } catch (error) {}
  };

  return (
    <Layout className="Character-profile">
      {!isLoading ? (
        <>
          <section className="Character-profile__go-back">
            <Link to="/characters">
              <i className="icon-arrow-left"></i>
            </Link>
          </section>
          <section className="Character-profile__container">
            <figure>
              <img src={data.image} alt={data.name} />
            </figure>
            <div className="Character-profile__info">
              <div>
                <h2>{data.name}</h2>
                <p>Status: {data.status}</p>
                <p>Gender: {data.gender}</p>
                <p>Species: {data.species}</p>
                <p>Episodes: {data.episode.length}</p>
              </div>
              <div>
                <h3>Origin:</h3>
                <p>{data.origin.name}</p>
              </div>
              <div>
                <h3>Location:</h3>
                <p>{data.location.name}</p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default CharacterProfile;
