import React from "react";
import { cn } from "utils";

/**
 * @typedef {object} Props
 * @property {Pagination} pagination 페이지 정보
 * @property {function(number)} onSelectPage 페이지 이동 함수
 */
/** @type {function(Props): React.JSX.Element} */
export default function PaginationNav({ pagination, onSelectPage }) {
  const pageNumbers = Array.from(
    { length: pagination.totalPages },
    (_, index) => index + 1,
  );

  return (
    <nav
      aria-label="pagination"
      className="flex items-center -space-x-px h-8 text-sm text-gray-500"
    >
      <button
        aria-label="prev-page"
        className={cn(
          "flex items-center justify-center px-3 h-8 ms-0 leading-tight ",
          "border border-e-0 border-gray-300 rounded-s-lg ",
          pagination.first
            ? " bg-gray-200 cursor-default"
            : "  hover:bg-gray-100 hover:text-gray-700",
        )}
        onClick={() => pagination.first || onSelectPage(0)}
      >
        <span className="sr-only">Previous</span>
        <svg
          className="w-2.5 h-2.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={cn(
            "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300",
            pagination.page === pageNumber - 1
              ? "bg-blue-100 cursor-default"
              : "hover:bg-gray-100 hover:text-gray-700",
          )}
          onClick={() =>
            pagination.page === pageNumber - 1 || onSelectPage(pageNumber - 1)
          }
        >
          {pageNumber}
        </button>
      ))}
      <button
        aria-label="next-page"
        className={cn(
          "flex items-center justify-center px-3 h-8 leading-tight",
          "border border-gray-300 rounded-e-lg",
          pagination.last
            ? " bg-gray-200 cursor-default"
            : "  hover:bg-gray-100 hover:text-gray-700",
        )}
        onClick={() => pagination.last || onSelectPage(pagination.page + 1)}
      >
        <span className="sr-only">Next</span>
        <svg
          className="w-2.5 h-2.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </nav>
  );
}
