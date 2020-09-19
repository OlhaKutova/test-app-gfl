import React from "react";
import { useSelector } from "react-redux";

import SearchInput from "../../components/SearchInput";
import { NextButton, PrevButton } from "../../components/arrowButtons/index";
import "./index.scss";

const PosterSection = () => {
  const { location } = useSelector((state) => state.movies);
  const { history, currentKey } = location;

  const currentPageIdx =
    (currentKey && history.findIndex((item) => item.key === currentKey)) || 0;

  return (
    <section className="poster-section-wrapper">
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
    </section>
  );
};

export default PosterSection;
