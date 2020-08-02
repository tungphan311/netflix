import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieRow from "../../../components/MovieRow/MovieRow";
import { actionGetPopularMovies } from "../../../state/action/movies";

const DEFAULT = {
  rowId: 2,
  title: null,
  list: new Array(6).fill({})
};

function Popular({ changeRow, rowSelect }) {
  const [populars, setPopulars] = useState(DEFAULT);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetPopularMovies()).then(res => setPopulars(res));
  }, [dispatch]);

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

export default Popular;
