import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchInput from "../../components/SearchInput";
import MovieList from "../../components/MovieList";
import { clearMoviesList, getMoviesList } from "../../redux/actionCreators";
import { NextButton, PrevButton } from "../../components/arrowButtons";
import { useQuery } from "../../utils";
import "./index.scss";

const Home = () => {
  const { location, searchText, results, total, loading, page } = useSelector(
    (state) => state.movies
  );
  const { history, currentKey } = location;
  const dispatch = useDispatch();
  const query = useQuery();
  const searchQuery = query.get("s");

  // useEffect(() => {
  //   dispatch(getMoviesList("Superman", 1));
  // }, [dispatch]);

  const handlePaginationChange = useCallback(
    (page) => {
      dispatch(getMoviesList({ searchText, page }));
    },
    [dispatch, searchText]
  );

  useEffect(() => {
    if (searchQuery) {
      dispatch(getMoviesList({ searchText: searchQuery }));
    } else {
      dispatch(clearMoviesList());
    }
  }, [dispatch, searchQuery]);

  const currentPageIdx =
    (currentKey && history.findIndex((item) => item.key === currentKey)) || 0;

  return (
    <section className="home-wrapper">
      <div className="home-inner-wrapper">
        <div className="poster-section" />
        <p className="title title-year position-absolute">2020</p>
        {currentPageIdx > 0 && (
          <PrevButton title="Prev" className="home-prev-btn" />
        )}
        <div className="search-section position-absolute">
          <h3>Explore movies & series</h3>
          <SearchInput />
        </div>
        <p className="title title-name position-absolute">Superman</p>
        {currentPageIdx < history.length - 1 && (
          <NextButton title="Next" className="home-next-btn" />
        )}
      </div>

      {results && results.length > 0 ? (
        <MovieList
          results={results}
          total={total}
          loading={loading}
          page={page}
          handlePaginationChange={handlePaginationChange}
        />
      ) : null}
    </section>
  );
};

export default Home;
