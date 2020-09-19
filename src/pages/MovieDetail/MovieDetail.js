import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../../redux/actionCreators";
import { PrevButton } from "../../components/arrowButtons";
import VideoContainer from "../../components/VideoContainer";
import "./index.scss";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movieDetails } = useSelector((state) => state.movies);
  const { loading, result } = movieDetails;

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;

  const {
    Title,
    Poster,
    imdbRating,
    Runtime,
    Genre,
    Year,
    Type,
    Plot,
  } = result;

  return (
    <section className="movie-details-wrapper">
      <PrevButton title="Back" className="back-btn" />
      <div className="movie-details-inner-wrapper">
        <VideoContainer />
        <div className="movie-details">
          <div className="movie-poster">
            <img src={Poster} alt="" />
            <div className="rating-info">
              <p>IMDB Rating:</p>
              <p>{`${imdbRating} / 10`}</p>
            </div>
          </div>
          <div className="movie-description">
            <h1>{Title}</h1>
            <div className="movie-description-speciality">
              <p>
                Runtime: <b>{Runtime}</b>
              </p>
              <p>
                Genre: <b>{Genre}</b>
              </p>
              <p>
                Year: <b>{Year}</b>
              </p>
              <p>
                Type: <b>{Type}</b>
              </p>
              <p>{Plot}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
