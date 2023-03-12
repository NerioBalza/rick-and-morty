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
  const { data, loading, error, filter, setFilter, searchByFilter } =
    useCharacters();

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
        <PageButtons data={data.info} />
      </div>
    </Layout>
  );
};

export default Characters;

//   const apiUrl = "https://rickandmortyapi.com/api/character/";

//   const [pageData, setPageData] = useState({
//     isLoading: true,
//     info: {},
//     results: [],
//     error: null,
//     currentLink: apiUrl,
//     filter: "",
//     currentPage: 1,
//   });

//   const fetchCharacterData = async (url, page = 1) => {
//     window.scrollTo(0, 0);
//     setPageData({
//       ...pageData,
//       isLoading: true,
//       results: [],
//       error: null,
//     });

//     try {
//       const response = await fetch(url);
//       const data = await response.json();

//       if (data.results) {
//         setPageData({
//           ...pageData,
//           isLoading: false,
//           results: data.results,
//           info: data.info,
//           currentPage: page,
//           currentLink: url,
//           error: null,
//         });
//       } else {
//         setPageData({
//           ...pageData,
//           isLoading: false,
//           results: data.error,
//           info: { pages: 0 },
//           currentPage: 0,
//           currentLink: url,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       setPageData({
//         ...pageData,
//         isLoading: false,
//         error: error.message,
//         currentPage: page,
//         currentLink: url,
//       });
//     }
//   };

//   const searchCharacters = () => {
//     if (filter === "") {
//       fetchCharacterData(apiUrl);
//     } else {
//       fetchCharacterData(`${apiUrl}?name=${filter}`);
//     }
//   };

//   const searchPage = (event) => {
//     const page = parseInt(event.target.value);
//     if (filter === "") {
//       fetchCharacterData(`${apiUrl}?page=${page}`, page);
//     } else {
//       fetchCharacterData(`${apiUrl}?page=${page}&name=${filter}`, page);
//     }
//   };

//   const nextOrPrevPage = (event) => {
//     const page = parseInt(event.target.id);
//     if (filter === "") {
//       fetchCharacterData(`${apiUrl}?page=${page}`, page);
//     } else {
//       fetchCharacterData(`${apiUrl}?page=${page}&name=${filter}`, page);
//     }
//   };

//   const refreshPage = () => {
//     fetchCharacterData(currentLink, currentPage);
//   };

//     <Layout className="Characters">
//       {!isLoading ? (
//         <>
//           {!error ? (
//             <>
//               <Searcher
//                 onClick={searchCharacters}
//                 onChange={handleChangeFilter}
//                 filter={filter}
//               />

//               {typeof results !== "string" ? (
//                 <section className="Characters__list">
//                   {results.map((character) => {
//                     return (
//                       <CharacterCard
//                         key={character.id}
//                         characterInfo={character}
//                       />
//                     );
//                   })}
//                 </section>
//               ) : (
//                 <section className="Characters__not-found">
//                   <h2>{results}</h2>
//                 </section>
//               )}

//               <PageButtons
//                 info={info}
//                 onClick={searchPage}
//                 nextOrPrev={nextOrPrevPage}
//                 page={currentPage}
//               />
//             </>
//           ) : (
//             <section className="Characters__error">
//               <h2>{`Error: ${error}`}</h2>
//               <button onClick={refreshPage}>
//                 <i className="icon-refresh-2"></i>
//               </button>
//             </section>
//           )}
//         </>
//       ) : (
//         <Loader />
//       )}
//     </Layout>
