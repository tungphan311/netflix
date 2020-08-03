import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieRow from "../../../components/MovieRow/MovieRow";
import { actionTopRatedMovies } from "../../../state/action/movies";

const DEFAULT = {
  rowId: 2,
  title: null,
  list: new Array(6).fill({})
};

function TopRated({ rowSelect, changeRow }) {
  const [populars, setPopulars] = useState(DEFAULT);
  const dispatch = useDispatch();

  const topRates = useSelector(state => state.movie.topRates);

  useEffect(() => {
    if (!Object.keys(topRates).length) {
      dispatch(actionTopRatedMovies()).then(res => setPopulars(res));
    } else {
      setPopulars(topRates);
    }
  }, [dispatch, topRates, topRates.length]);

  const { rowId, title, list } = populars;

  return (
    <MovieRow
      rowId={rowId}
      rowSelect={rowSelect}
      title={title}
      list={list}
      changeRow={changeRow}
    />
  );
}

export default TopRated;
