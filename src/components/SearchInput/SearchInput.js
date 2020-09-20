import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

import { clearMoviesList } from "../../redux/actionCreators";
import { redirect } from "../../utils";
import "./index.scss";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const debouncedGetMovies = useCallback(
    debounce((searchText) => {
      redirect(`/?s=${searchText}`);
      setSearch("");
    }, 2000),
    [dispatch, setSearch]
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
    [debouncedGetMovies, dispatch, setSearch]
  );

  return (
    <input
      type="text"
      className="input-search"
      placeholder="Search ..."
      value={search}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
