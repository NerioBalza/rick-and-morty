import React, { useEffect, useState } from "react";

const PageButtons = ({ info, onClick, page, nextOrPrev }) => {
  const [linksList, setLinksList] = useState([]);
  const { pages } = info;
  const prevPage = parseInt(page) - 1;
  const nextPage = parseInt(page) + 1;

  useEffect(() => {
    fillButtons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fillButtons = () => {
    setLinksList([]);
    const list = [];

    if (pages < 5 && pages > 0) {
      for (let index = 1; index <= pages; index++) {
        list.push({ label: index });
      }
    } else if (pages === 0) {
      list.push({ label: 0 });
    } else {
      if (page > 2 && page < pages - 2) {
        for (let index = page - 2; index < page + 3; index++) {
          list.push({ label: index });
        }
      } else if (page <= 2) {
        for (let index = 1; index <= 5; index++) {
          list.push({ label: index });
        }
      } else {
        for (let index = pages - 4; index <= pages; index++) {
          list.push({ label: index });
        }
      }
    }
    setLinksList(list);
  };

  return (
    <section className="Page-buttons">
      <div className="Page-buttons__prev">
        {info.prev ? (
          <button onClick={nextOrPrev}>
            <i className="icon-arrow-left" id={prevPage}></i>
          </button>
        ) : (
          <button className="Disable">
            <i className="icon-arrow-left"></i>
          </button>
        )}
      </div>

      <div className="Page-buttons__list">
        {linksList.map((buttonInfo) => {
          const disable = buttonInfo.label === page ? "Disable" : "";
          return (
            <button
              onClick={!disable ? onClick : null}
              className={disable}
              key={buttonInfo.label}
              value={buttonInfo.label}
            >
              {buttonInfo.label}
            </button>
          );
        })}
      </div>

      <div className="Page-buttons__next">
        {info.next ? (
          <button onClick={nextOrPrev}>
            <i className="icon-arrow-right" id={nextPage}></i>
          </button>
        ) : (
          <button className="Disable">
            <i className="icon-arrow-right"></i>
          </button>
        )}
      </div>
    </section>
  );
};

export default PageButtons;
