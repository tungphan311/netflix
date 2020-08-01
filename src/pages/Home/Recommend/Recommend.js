import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieRow from "../../../components/MovieRow/MovieRow";
import { actionGetRecommend } from "../../../state/action/user";

function Recommend({ changeRow, rowSelect }) {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetRecommend()).then(res => setList(res));
  }, [dispatch]);

  return (
    <MovieRow
      rowId={1}
      rowSelect={rowSelect}
      title="Films you may like"
      list={list}
      changeRow={changeRow}
    />
  );
}

export default Recommend;
