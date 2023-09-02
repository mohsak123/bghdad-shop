import React from "react";
import "./pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatedPages = [];
  console.log("pages = " + pages);
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="page previous"
      >
        <i className="bi bi-arrow-right"></i>
        السابق
      </button>
      {generatedPages.map((page) => (
        <div
          onClick={() => setCurrentPage(page)}
          className={currentPage === page ? "page active" : "page"}
          key={page}
        >
          {page}
        </div>
      ))}
      <button
        disabled={currentPage === pages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="page next"
      >
        <i className="bi bi-arrow-left"></i>
        التالي
      </button>
    </div>
  );
};

export default Pagination;
