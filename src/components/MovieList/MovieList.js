import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import MovieListFooter from "../MovieListFooter";
import Spinner from "../Spinner";
import "./index.scss";

const MovieList = ({
  results,
  total,
  page,
  handlePaginationChange,
  loading,
}) => {
  const moviesListElem = useRef(null);
  const moviesListInnerElem = useRef(null);

  const handleScroll = useCallback(
    (elem, elem2) => {
      let scrollTop = elem.current.scrollTop;
      let scrollDiff = elem2.current.scrollHeight - scrollTop;

      if (scrollDiff < 500) {
        handlePaginationChange(parseInt(page) + 1, true);
      }
    },
    [page, handlePaginationChange]
  );

  useEffect(() => {
    if (!loading) {
      moviesListElem.current = document.querySelector(".movie-list-wrapper");
      moviesListInnerElem.current = document.querySelectorAll(
        ".movie-list-wrapper > .list"
      )[0];
      const handler = () => {
        handleScroll(moviesListElem, moviesListInnerElem);
      };
      moviesListElem.current.addEventListener("scroll", handler);

      return () => {
        moviesListElem.current.removeEventListener("scroll", handler);
      };
    }
  }, [handleScroll, loading]);

  return (
    <>
      <section className="movie-list-wrapper">
        <ul className="list">
          {loading ? (
            <Spinner />
          ) : (
            results.map((item) => {
              const { Title, Year, Type, Poster, imdbID } = item;
              return (
                <li key={imdbID} className="movie-list-item">
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
            })
          )}
        </ul>
      </section>
      <MovieListFooter
        page={page}
        total={total}
        handlePaginationChange={handlePaginationChange}
      />
    </>
  );
};

export default MovieList;
