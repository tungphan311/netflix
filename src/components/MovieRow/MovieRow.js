import React, { useState } from "react";
import "./MovieRow.scss";
import SliderItem from "./SliderItem";

function MovieRow({ title, list }) {
  const [page, setPage] = useState(0);
  const [hover, setHover] = useState(0);
  const [item, setItem] = useState(0);

  const numOfPages = item > 0 ? parseInt(list.length / item) : 0;

  const changePage = skip => {
    let newPage = page + skip;

    newPage = newPage > numOfPages ? 0 : newPage === -1 ? numOfPages : newPage;

    setPage(newPage);
  };

  const renderIndicator = () => {
    let result = [];
    for (let i = 0; i <= numOfPages; i++) {
      result = [
        ...result,
        <li key={i} id={i} className={`${page === i ? "active" : ""}`}></li>
      ];
    }

    return result;
  };

  return (
    <div className="mvRow mvRow_title_card">
      <h2 className="rowHeader">
        <span className="rowTitle" aria-label={title}>
          <div className="row-header-title">{title}</div>
        </span>
      </h2>
      <div className="rowContainer verticalBoxArtRow rowContainer_title_card">
        <div className="ptrack-container">
          <div className="rowContent slider-hover-trigger-layer">
            <div className="slider">
              <span
                className="handle handlePrev active"
                tabIndex="0"
                role="button"
                onClick={() => changePage(-1)}
              >
                <b className="indicator-icon icon-leftCaret"></b>
              </span>
              <ul className="pagination-indicator">{renderIndicator()}</ul>
              <div className="sliderMask showPeek">
                <div className="sliderContent row-with-x-columns" id="slider">
                  {list.map(item => (
                    <SliderItem
                      key={item.id}
                      hover={hover}
                      setHover={setHover}
                      details={item}
                      page={page}
                      setItem={setItem}
                    />
                  ))}
                </div>
              </div>
              <span
                className="handle handleNext active"
                tabIndex="0"
                role="button"
                onClick={() => changePage(1)}
              >
                <b className="indicator-icon icon-rightCaret"></b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
