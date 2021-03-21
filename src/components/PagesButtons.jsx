import React, { useEffect } from "react";

import NavButton from "./NavButton";

const PagesButtons = ({ info, loadMore, currentURL }) => {
  const { next, prev, pages } = info;

  let pagesList = [];

  for (let i = 1; i <= pages; i++) {
    pagesList.push({
      url: `https://rickandmortyapi.com/api/character/?page=` + i,
      id: i,
    });
  }

  useEffect(() => {
    const numbersButtons = document.getElementById("buttons-numbers");
    const currentPageButton = document.getElementById("disable");
    const containerPos = numbersButtons.getBoundingClientRect();
    const buttonPos = currentPageButton.getBoundingClientRect();

    numbersButtons.scrollTo(buttonPos.x - 40 - (containerPos.x - 40), 0);
  });

  return (
    <section className="pages-buttons">
      <div className="pages-buttons-arrows">
        {/* Button prev */}
        {prev ? (
          <NavButton loadMore={loadMore} link={prev}>
            <i className="icon-arrow-left"></i>
          </NavButton>
        ) : null}

        {/* Button Next */}
        {next ? (
          <NavButton loadMore={loadMore} link={next}>
            <i className="icon-arrow-right"></i>
          </NavButton>
        ) : null}
      </div>
      <div className="pages-buttons-numbers" id="buttons-numbers">
        {pagesList.map((url) => {
          const disable = url.url === currentURL ? true : false;
          return (
            <NavButton
              loadMore={loadMore}
              link={url.url}
              key={url.id}
              disable={disable}
            >
              {url.id}
            </NavButton>
          );
        })}
      </div>
    </section>
  );
};

export default PagesButtons;
