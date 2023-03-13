import React from "react";
import { useParams } from "react-router-dom";
import { Layout, Loader } from "components";
import useChatacter from "hooks/useChatacter";

const CharacterProfile = () => {
  const { id } = useParams();

  const { data, loading, error } = useChatacter(id);

  return (
    <Layout className="character" showFooter={false} back={true}>
      {!(loading || error) && (
        <div className="character-profile">
          <div className="character__display">
            <figure>
              <img src={data.image} alt={data.name} />
            </figure>

            <h1>{data.name}</h1>
          </div>

          <div className="character__data">
            <h2>Character information:</h2>
            <p>
              Status: <span>{data.status}</span>
            </p>
            <p>
              Species: <span>{data.species}</span>
            </p>
            <p>
              Gender: <span>{data.gender}</span>
            </p>
            <p>
              Origin: <span>{data.origin.name}</span>
            </p>
            <p>
              Location: <span>{data.location.name}</span>
            </p>
          </div>
          <div className="character__episodes"></div>
        </div>
      )}

      {error && <div></div>}

      {loading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </Layout>
  );
};

export default CharacterProfile;
