import React, { useEffect, useState } from "react";
import qs from "query-string";
import { useDispatch } from "react-redux";
import { actionSearchMovies } from "../../state/action/movies";
import Row from "../../components/Row/Row";
import { splitList } from "../../components/MovieRow/MovieRow";

function BrowseTitle() {
  const [query, setQuery] = useState("");
  const [rowSelect, setRowSelect] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const changeRow = id => setRowSelect(id);

  useEffect(() => {
    const { q } = qs.parse(window.location.search);
    setQuery(q);

    dispatch(
      actionSearchMovies({
        type: "Titles",
        query: q,
        short: 0
      })
    ).then(({ title: { has_more, list } }) => {
      setHasMore(has_more);
      setList(list);
    });
  }, [dispatch]);

  const movies = splitList(6, list);

  return (
    <div className="page-container">
      <div className="header"></div>
      <div className="page--title">
        <div className="title">Results for "{query}"</div>
      </div>
      <div>
        <div className={`gallery ${rowSelect > 0 ? "gallery-open" : ""}`}>
          <div></div>
          <div className="galleryContent">
            <div>
              <div className="galleryLockups">
                {movies.map((list, index) => (
                  <Row
                    rowId={index + 1}
                    key={index}
                    list={list}
                    changeRow={changeRow}
                    rowSelect={rowSelect}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseTitle;
