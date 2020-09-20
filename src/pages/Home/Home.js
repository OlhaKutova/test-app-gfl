import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearMoviesList, getMoviesList } from "../../redux/actionCreators";
import { useQuery } from "../../utils";
import MovieList from "../../components/MovieList";
import PosterSection from "../../components/PosterSection";
import "./index.scss";

const Home = () => {
  const { searchText, results, total, loading, page } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const query = useQuery();
  const searchQuery = query.get("s");

  useEffect(() => {
    if (searchQuery) {
      dispatch(getMoviesList({ searchText: searchQuery }));
    } else {
      dispatch(clearMoviesList());
    }
  }, [dispatch, searchQuery]);

  return (
    <section className="home-wrapper">
      <PosterSection />
      {results && results.length > 0 ? (
        <MovieList
          results={results}
          total={total}
          loading={loading}
          page={page}
          searchText={searchText}
        />
      ) : null}
    </section>
  );
};

export default Home;
