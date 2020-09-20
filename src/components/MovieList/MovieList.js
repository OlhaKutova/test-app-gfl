import React, { useRef, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getMoviesList } from "../../redux/actionCreators";
import MovieListFooter from "../MovieListFooter";
import Spinner from "../Spinner";
import "./index.scss";

const MovieList = ({ results, total, page, loading, searchText }) => {
  const dispatch = useDispatch();
  const [isScrollLoading, setIsScrollLoading] = useState(false);
  const wrapperRef = useRef(null);
  const listRef = useRef(null);

  const handlePaginationChange = useCallback(
    (page, isScrollType) => {
      if (!isScrollType) wrapperRef.current.scrollTop = 0;
      if (!isScrollLoading) {
        setIsScrollLoading(true);
        dispatch(getMoviesList({ searchText, page, isScrollType })).then(() =>
          setIsScrollLoading(false)
        );
      }
    },
    [isScrollLoading, dispatch, searchText]
  );

  const handleScroll = useCallback(() => {
    let scrollTop = wrapperRef.current.scrollTop;
    let scrollDiff = listRef.current.scrollHeight - scrollTop;

    if (scrollDiff < 500) {
      handlePaginationChange(parseInt(page) + 1, true);
    }
  }, [page, handlePaginationChange]);

  useEffect(() => {
    if (!loading) {
      const handler = () => {
        handleScroll(wrapperRef, listRef);
      };
      wrapperRef.current.addEventListener("scroll", handler);

      return () => {
        wrapperRef.current.removeEventListener("scroll", handler);
      };
    }
  }, [handleScroll, loading]);

  return (
    <>
      <section className="movie-list-wrapper" ref={wrapperRef}>
        <ul className="list" ref={listRef}>
          <div className="movie-list-loading">{loading && <Spinner />}</div>
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
                </Link>
                <div className="hidden-image-wrapper">
                  <img src={Poster} alt="poster" />
                </div>
              </li>
            );
          })}
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
