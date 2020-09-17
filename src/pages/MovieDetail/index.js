import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movieDetails } = useSelector((state) => state.movies);
  const { loading, result } = movieDetails;

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div>MovieDetail {id}</div>
      <div>{result.Title}</div>
      <div>MovieDetail {id}</div>
    </div>
  );
};

export default MovieDetail;
