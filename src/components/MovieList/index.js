import React from "react";
import { Link } from "react-router-dom";

import Pagination from "../Pagination";
import "./index.scss";

const MovieList = ({
  results,
  total,
  page,
  handlePaginationChange,
  loading,
}) => {
  return (
    <section className="movie-list-wrapper">
      <ul className="list">
        {results.map((item) => {
          const { Title, Year, Type, Poster, imdbID } = item;
          return (
            <li key={imdbID}>
              <Link to={`/movie/${imdbID}`}>
                <div className="inner-wrapper">
                  <div className="title">{Title}</div>
                  <div className="subtitle">
                    <p>{Year}</p>
                    <p>{Type}</p>
                  </div>
                </div>
                <div className="hidden-image-wrapper">
                  <img src={Poster} alt="poster" />
                </div>
              </Link>
            </li>
          );
        })}
        <div className="movie-list-footer">
          <div className="items-per-page-info">
            <p>Items per page: 10</p>
          </div>
          <Pagination
            page={page}
            total={total}
            handlePaginationChange={handlePaginationChange}
          />
        </div>
      </ul>
    </section>
  );
};

export default MovieList;
