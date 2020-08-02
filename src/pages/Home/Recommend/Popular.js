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
  const [populars, setPopulars] = useState(new Array(2).fill(DEFAULT));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetPopularMovies()).then(res => setPopulars(res));
  }, [dispatch]);

  return (
    <>
      {populars.map(({ rowId, title, list }) => (
        <MovieRow
          rowId={rowId}
          rowSelect={rowSelect}
          title={title}
          list={list}
          changeRow={changeRow}
        />
      ))}
    </>
  );
}

export default Popular;
