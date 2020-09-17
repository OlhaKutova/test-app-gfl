import React, { useCallback } from "react";

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

  const start = (page - 1) * 10 + 1;
  const isStartPage = start === 1;
  const end = page * 10;
  const isEndPage = end >= total;

  return (
    <div>
      <button onClick={handleChange("prev")} disabled={isStartPage}>
        Prev
      </button>
      {start} - {isEndPage ? total : end}
      <button onClick={handleChange("next")} disabled={isEndPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
