import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PageButtons = (props) => {
  const { data, page, searchPage } = props;
  const [buttonsArr, setButtonsArr] = useState([]);

  const handlePrev = () => {
    if (data.prev) {
      searchPage(data.prev, page - 1);
    }
  };
  const handleNext = () => {
    if (data.next) {
      searchPage(data.next, page + 1);
    }
  };

  const handleSearchPage = (e) => {
    const newPage = parseInt(e.target.value);
    if (!data.pages) return;
    if (newPage === page) return;
    let newUrl = data.prev ? data.prev : data.next;
    const index = newUrl.indexOf("=") + 1;
    newUrl =
      newUrl.slice(0, index) +
      newPage +
      newUrl.slice(index + 1 * newPage.toString().length);
    searchPage(newUrl, newPage);
  };

  const setButtons = () => {
    setButtonsArr([]);
    const { pages } = data;
    const arr = [];

    if (pages < 5 && pages > 0) {
      for (let index = 1; index <= pages; index++) {
        arr.push(index);
      }
    } else if (pages === 0) {
      arr.push(0);
    } else {
      if (page > 2 && page < pages - 2) {
        for (let index = page - 2; index < page + 3; index++) {
          arr.push(index);
        }
      } else if (page <= 2) {
        for (let index = 1; index <= 5; index++) {
          arr.push(index);
        }
      } else {
        for (let index = pages - 4; index <= pages; index++) {
          arr.push(index);
        }
      }
    }
    setButtonsArr(arr);
  };

  useEffect(() => {
    setButtons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="page-buttons">
      <button className={!data.prev ? "disabled" : ""} onClick={handlePrev}>
        <FaAngleLeft />
      </button>

      <div className="pages">
        {buttonsArr.map((elm, i) => (
          <button
            key={i}
            className={elm === page ? "disabled" : ""}
            onClick={handleSearchPage}
            value={elm}
          >
            {elm}
          </button>
        ))}

        {data.pages - 5 > page && (
          <div className="pages__last">
            <p>...</p>
            <button onClick={handleSearchPage} value={data.pages}>
              {data.pages}
            </button>
          </div>
        )}
      </div>

      <button className={!data.next ? "disabled" : ""} onClick={handleNext}>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default PageButtons;
