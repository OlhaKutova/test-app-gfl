import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { clearMoviesList, getMoviesList } from "../../redux/actionCreators";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const debouncedGetMovies = useCallback(
    debounce((searchText) => {
      dispatch(getMoviesList({ searchText }));
    }, 2000),
    [dispatch]
  );

  const handleChange = useCallback(
    (event) => {
      const searchText = event.target.value;
      setSearch(searchText);
      if (searchText && searchText.length > 0) {
        debouncedGetMovies(searchText);
      } else {
        dispatch(clearMoviesList());
      }
    },
    [debouncedGetMovies, dispatch]
  );

  return (
    <div>
      <input type="text" value={search} onChange={handleChange} />
    </div>
  );
};

export default SearchInput;
