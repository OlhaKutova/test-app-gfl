import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../components/SearchInput";
import MovieList from "../../components/MovieList";
import { getMoviesList, getStarterMovie } from "../../redux/actionCreators";
import Pagination from "../../components/Pagination";

const Home = () => {
  const { searchText, results, total, loading, starter, page } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const { loading: starterLoading, result: starterResult } = starter;

  useEffect(() => {
    dispatch(getStarterMovie("Superman"));
  }, [dispatch]);

  const handlePaginationChange = useCallback(
    (page) => {
      dispatch(getMoviesList({ searchText, page }));
    },
    [dispatch, searchText]
  );

  const renderLoader = <div>Loading...</div>;

  const renderContent = (
    <div>
      <div className="hero">{JSON.stringify(starterResult, null, 2)}</div>
      <SearchInput />
      {results.length > 0 ? (
        <>
          <MovieList results={results} total={total} loading={loading} />
          <Pagination
            page={page}
            total={total}
            handlePaginationChange={handlePaginationChange}
          />
        </>
      ) : null}
    </div>
  );

  return starterLoading ? renderLoader : renderContent;
};

export default Home;
