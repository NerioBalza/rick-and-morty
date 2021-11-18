import React, { useEffect, useState } from "react";

const PageButtons = ({ info, onClick, page }) => {
  const [linksList, setLinksList] = useState([]);
  const { pages } = info;

  useEffect(() => {
    fillButtons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fillButtons = () => {
    setLinksList([]);
    const list = [];

    if (pages < 5) {
      for (let index = 1; index <= pages; index++) {
        list.push({ label: index });
      }
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
          <button onClick={onClick} value={page - 1}>
            <i className="icon-arrow-left"></i>
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
          <button onClick={onClick} value={parseInt(page) + 1}>
            <i className="icon-arrow-right"></i>
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
