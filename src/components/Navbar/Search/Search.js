import React, { useState, useEffect } from "react";
import "./Search.scss";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import OutsideClickWrapper from "../../OutsideClickWrapper/OutsideClickWrapper";
import { actionSearchMovies } from "../../../state/action/movies";
import { SearchIcon } from "../../Svg";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SELECTORS = [
  {
    label: "All",
    svg: (
      <>
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
      </>
    )
  },
  {
    label: "Titles",
    svg: (
      <>
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
      </>
    )
  },
  {
    label: "Celebs",
    svg: (
      <>
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"></path>
      </>
    )
  }
];

function Search() {
  const [title, setTitle] = useState("All");
  const [text, setText] = useState("");
  // const [cancel, setCancel] = useState("");
  const [popup, togglePopup] = useState(false);
  const [focus, toggleFocus] = useState(false);
  const [celebs, setCelebs] = useState([]);
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeout, setTypingTimeout] = useState(0);

  const dispatch = useDispatch();

  const closePopup = () => togglePopup(false);
  const outFocus = () => toggleFocus(false);

  const results = useSelector(state => state.search);

  const isSearched = value => {
    if (title === "All") {
      return (
        Object.keys(results.movies).includes(value) &&
        Object.keys(results.celebs).includes(value)
      );
    } else if (title === "Celebs") {
      return Object.keys(results.celebs).includes(value);
    } else if (title === "Title") {
      return Object.keys(results.movies).includes(value);
    }
  };

  const handleInputChange = event => {
    const value = event.target.value;
    if (timeout) {
      clearTimeout(timeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        setText(value);

        if (!value) {
          setMovie([]);
          setCelebs([]);
          setSearch(false);
        } else {
          if (isSearched(value)) {
            const celebs = results.celebs[value];
            const title = results.movies[value];

            setCelebs(celebs);
            setMovie(title);
          } else {
            setLoading(true);

            dispatch(
              actionSearchMovies({
                type: title,
                query: value,
                short: 1
              })
            ).then(({ celebs, title }) => {
              setCelebs(celebs);
              setMovie(title);
              setLoading(false);
              setSearch(true);
            });
          }
        }
      }, 500)
    );
  };

  const handleChangeTitle = label => {
    setTitle(label);
  };

  return (
    <form className={`navbar__search ${focus ? "focus" : ""}`}>
      <div className="category-selector">
        <div style={{ position: "relative" }}>
          <OutsideClickWrapper isShowing={popup} onClickOutside={closePopup}>
            <label className="ipc-button" onClick={() => togglePopup(!popup)}>
              <div className="ipc-button__text">
                {title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="ipc-icon ipc-icon--arrow-drop-down navbar__flyout__button-pointer"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                </svg>
              </div>
            </label>
            <div
              className={`category-list ${popup ? "category-list--open" : ""}`}
            >
              <div className="ipc-menu__items">
                <span>
                  <ul className="ipc-list">
                    {SELECTORS.map(({ svg, label }) => (
                      <Selector
                        key={label}
                        svg={svg}
                        label={label}
                        title={title}
                        setTitle={handleChangeTitle}
                        closePopup={closePopup}
                      />
                    ))}
                  </ul>
                </span>
              </div>
            </div>
          </OutsideClickWrapper>
        </div>
      </div>
      <div className="search__input__wrapper">
        <input
          className="navbar__search__input"
          type="text"
          placeholder="Title ..."
          onChange={handleInputChange}
          onFocus={() => toggleFocus(true)}
          onBlur={() => toggleFocus(false)}
        />

        <div
          className={`search__menu ${
            focus ? (title !== "Keywords" ? "show" : "") : ""
          }`}
        >
          <div>
            {!loading && (
              <ul className="suggestion__list">
                {celebs.map((m, i) => (
                  <Movie {...m} key={i} outFocus={outFocus} />
                ))}
                {search && celebs.length && (
                  <Link class="cBtiSu" to={`/browse/celebs?q=${text}`}>
                    See all celebs with "{text}"
                  </Link>
                )}
                {movie.map((m, i) => (
                  <Movie {...m} key={i} outFocus={outFocus} />
                ))}
                {search && movie.length && (
                  <Link class="cBtiSu" to={`/browse/title?q=${text}`}>
                    See all movies with "{text}"
                  </Link>
                )}
              </ul>
            )}
          </div>
          {search && !celebs.length && !movie.length && (
            <div className="dYwgNK">
              <div
                className="ipc-error-message ipc-error-message--on-baseAlt"
                role="alert"
              >
                <div role="presentation">No results found.</div>
              </div>
            </div>
          )}
          {loading && (
            <div className="dYwgNK">
              <PulseLoader
                css={override}
                size={15}
                color={"#e50914"}
                loading={loading}
              />
            </div>
          )}
        </div>
      </div>
      <button type="submit" className="navbar__search__button">
        {SearchIcon}
      </button>
    </form>
  );
}

export default Search;

const Selector = ({ svg, label, title, setTitle, closePopup }) => {
  const [fill, setFill] = useState("#e5e5e5");

  useEffect(() => {
    if (label === title) {
      setFill("rgb(245, 197, 24)");
    } else {
      setFill("#e5e5e5");
    }
  }, [label, title]);

  return (
    <div
      className="ipc-list__item"
      onClick={() => {
        setTitle(label);
        closePopup();
      }}
    >
      <span
        className={`ipc-list-item__text ${title === label ? "selected" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="ipc-icon"
          viewBox="0 0 24 24"
          fill={fill}
          role="presentation"
        >
          {svg}
        </svg>
        <span>{label}</span>
      </span>
    </div>
  );
};

const Movie = ({ id, avatar, year, name, genres, outFocus }) => (
  <li className="search--suggestion">
    <Link to={`/title/${id}`} className="suggestion--link" onClick={outFocus}>
      <div className="suggestion-image">
        <div className="ipc-media ipc-media--poster" style={{ width: "100%" }}>
          <img
            alt="poster"
            className="ipc-image"
            loading="lazy"
            src={avatar}
            sizes="50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw"
            width="50"
          ></img>
        </div>
      </div>
      <div className="suggestion-info">
        <div className="bFZBPn bFZBPn--title">{name}</div>
        {year && <div className="bFZBPn bFZBPn--year">{year}</div>}
        {genres && (
          <div className="bFZBPn bFZBPn--year">
            {genres.map((genre, i) => (
              <span key={i}>{`${genre}, `}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  </li>
);
