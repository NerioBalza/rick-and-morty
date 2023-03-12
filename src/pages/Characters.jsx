import React from "react";
import {
  Layout,
  Searcher,
  Loader,
  PageButtons,
  CharacterList,
} from "components";
import useCharacters from "hooks/useCharacters";

const Characters = (props) => {
  const {
    data,
    loading,
    error,
    filter,
    page,
    setFilter,
    searchByFilter,
    searchPage,
  } = useCharacters();

  return (
    <Layout className="characters" showFooter={false}>
      <div>
        <Searcher
          value={filter}
          onChange={setFilter}
          onClick={searchByFilter}
        />

        {!(loading || error) && <CharacterList data={data.results} />}
      </div>

      {error && (
        <div className="characters__error">
          <h2>{error}</h2>
        </div>
      )}

      {loading && (
        <div className="characters__loader">
          <Loader />
        </div>
      )}

      <div>
        <PageButtons data={data.info} page={page} searchPage={searchPage} />
      </div>
    </Layout>
  );
};

export default Characters;
