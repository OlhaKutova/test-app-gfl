import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ results, total, loading }) => {
  return (
    <>
      <div>{JSON.stringify({ results, total, loading }, null, 2)}</div>
      <ul>
        {results.map((item) => {
          const { Title, imdbID } = item;
          return (
            <li key={imdbID}>
              <Link to={`/movie/${imdbID}`}>
                <div>{Title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
