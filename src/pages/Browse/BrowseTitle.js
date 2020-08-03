import React, { useEffect, useState } from "react";
import qs from "query-string";
import { useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";
import { actionSearchMovies } from "../../state/action/movies";
import Row from "../../components/Row/Row";
import { splitList } from "../../components/MovieRow/MovieRow";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function BrowseTitle() {
  const [query, setQuery] = useState("");
  const [rowSelect, setRowSelect] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const changeRow = id => setRowSelect(id);

  const fetchData = () => {
    setLoading(true);

    const { q } = qs.parse(window.location.search);
    setQuery(q);

    dispatch(
      actionSearchMovies({
        type: "Titles",
        query: q,
        short: 0,
        page
      })
    ).then(({ title: { has_more, list: newList } }) => {
      setHasMore(has_more);
      setList([...list, ...newList]);

      if (has_more) {
        setPage(page + 1);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const movies = splitList(6, list);

  return (
    <div className="page-container">
      <div className="header"></div>
      <div className="page--title">
        <div className="title">Results for "{query}"</div>
      </div>

      <InfiniteScroll
        dataLength={list.length / 6}
        hasMore={hasMore}
        loader={
          <div className="infinite--loading">
            <RingLoader
              css={override}
              size={60}
              color={"#e50914"}
              loading={true}
            />
          </div>
        }
        next={fetchData}
      >
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
      </InfiniteScroll>
    </div>
  );
}

export default BrowseTitle;
