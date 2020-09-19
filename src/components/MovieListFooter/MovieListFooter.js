import React from "react";

import Pagination from "../Pagination";
import "./index.scss";

const MovieListFooter = ({ page, total, handlePaginationChange }) => {
  return (
    <footer className="movie-list-footer">
      <div className="footer-inner-wrapper">
        <div className="items-per-page-info">
          <p>Items per page: 10</p>
        </div>
        <Pagination
          page={page}
          total={total}
          handlePaginationChange={handlePaginationChange}
        />
      </div>
    </footer>
  );
};

export default MovieListFooter;
