import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieRow from "../../../components/MovieRow/MovieRow";
import { actionGetRecommend } from "../../../state/action/user";

function Recommend({ changeRow, rowSelect }) {
  const [list, setList] = useState(new Array(6).fill({}));
  const [title, setTile] = useState(null);
  const dispatch = useDispatch();

  const recommends = useSelector(state => state.movie.recommends);

  useEffect(() => {
    if (!recommends.length) {
      dispatch(actionGetRecommend()).then(res => {
        setList(res);
        setTile("Films you may like");
      });
    } else {
      setList(recommends);
      setTile("Films you may like");
    }
  }, [dispatch, recommends, recommends.length]);

  if (!list.length) return null;

  return (
    <MovieRow
      rowId={1}
      rowSelect={rowSelect}
      title={title}
      list={list}
      changeRow={changeRow}
    />
  );
}

export default Recommend;
