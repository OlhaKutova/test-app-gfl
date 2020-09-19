import React, { useCallback } from "react";

import "./index.scss";

const Pagination = ({ page, total, handlePaginationChange }) => {
  const handleChange = useCallback(
    (type) => () => {
      let newPage = page;
      if (type === "prev") newPage--;
      if (type === "next") newPage++;
      handlePaginationChange(newPage);
    },
    [handlePaginationChange, page]
  );

  const itemsPerPage = 10;
  const start = (page - 1) * itemsPerPage + 1;
  const isStartPage = start === 1;
  const end = page * itemsPerPage;
  const isEndPage = end >= total;

  return (
    <div className="pagination-wrapper">
      <button
        className="btn prev-movie-list"
        onClick={handleChange("prev")}
        disabled={isStartPage}
      >
        {start} - {isEndPage ? total : end}
      </button>
      <button
        className="btn next-movie-list"
        onClick={handleChange("next")}
        disabled={isEndPage}
      >
        {total}
      </button>
    </div>
  );
};

export default Pagination;
