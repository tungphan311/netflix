import React, { useState, useEffect } from "react";
import "./Genres.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";
import { getGenres } from "../../../services/userServices";
import { actionGetGenreMovies } from "../../../state/action/browse";
import { splitList } from "../../../components/MovieRow/MovieRow";
import Row from "../../../components/Row/Row";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Genres({
  match: {
    params: { id }
  }
}) {
  const [rowSelect, setRowSelect] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const changeRow = id => setRowSelect(id);

  const fetchData = (p = page) => {
    setLoading(true);

    dispatch(actionGetGenreMovies({ id, page: p })).then(
      ({ has_more, list: newList }) => {
        setHasMore(has_more);
        setList([...list, ...newList]);

        if (has_more) {
          setPage(page + 1);
        }
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    setPage(1);
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const movies = splitList(6, list);

  return (
    <div className="page-container">
      <div className="header"></div>
      <div className="page--title">
        <div className="aro-gallery-header grid-view">
          <div className="title"></div>
          <div className="aro-genre-details">
            <span className="genreTitle">Movies</span>
            <Subgenres />
            <div className="aro-toggle grid-selected"></div>
          </div>
        </div>
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
        style={{ overflow: "hidden" }}
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

export default Genres;

const Subgenres = () => {
  const [show, setShow] = useState(false);
  const [genres, setGenres] = useState([]);

  const closeDropdown = () => setShow(false);

  useEffect(() => {
    const fetchData = async () => {
      await getGenres()
        .then(res => {
          const newGenres = genresSplit(res.data.data);
          setGenres(newGenres);
        })
        .catch(err => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <div className="subgenres">
      <div className="ptrack-container">
        <div className="ptrack-content">
          <div label="Genres" cols={3} className="nfDropDown theme-lakira">
            <div
              className="label"
              role="button"
              tabIndex={0}
              onClick={() => setShow(!show)}
            >
              Genres
              <span className="arrow"></span>
            </div>
            <div
              className="sub-menu theme-lakira"
              style={show ? { opacity: 1, transitionDuration: "150ms" } : {}}
            >
              {genres.map((list, i) => (
                <Col key={i} list={list} closeDropdown={closeDropdown} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Col = ({ list, closeDropdown }) => (
  <ul className="sub-menu-list multi-column">
    {list.map((genre, i) => (
      <Cell key={i} {...genre} closeDropdown={closeDropdown} />
    ))}
  </ul>
);

const Cell = ({ name, id, closeDropdown }) => (
  <li className="sub-menu-item" onClick={closeDropdown}>
    <Link to={`/genres/${id}`} className="sub-menu-link">
      {name}
    </Link>
  </li>
);

const genresSplit = list => {
  const length = parseInt(list.length / 3) + 1;

  const arr1 = list.slice(0, length);
  const arr2 = list.slice(length, length * 2);
  const arr3 = list.slice(length * 2);

  return [arr1, arr2, arr3];
};
