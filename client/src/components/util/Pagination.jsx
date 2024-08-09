const Pagination = ({ pageData, setPage }) => {
  const pageNumbers = Array.from(
    { length: pageData.totalPages },
    (_, index) => index + 1,
  );

  return (
    <nav aria-label="pagination">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a
            href="#"
            className={
              "flex items-center justify-center px-3 h-8 ms-0 leading-tight " +
              "border border-e-0 border-gray-300 rounded-s-lg " +
              (pageData.first
                ? "text-gray-700 bg-gray-100"
                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700")
            }
            onClick={() => pageData.first || setPage(0)}
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>

        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a
              href="#"
              className={
                "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700" +
                (pageData.number === pageNumber - 1
                  ? " bg-blue-500 text-white"
                  : " ")
              }
              onClick={() =>
                pageData.number === pageNumber - 1 || setPage(pageNumber - 1)
              }
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li aria-label="next-page">
          <a
            href="#"
            className={
              "flex items-center justify-center px-3 h-8 leading-tight " +
              "border border-gray-300 rounded-e-lg " +
              (pageData.last
                ? "text-gray-700 bg-gray-100"
                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700")
            }
            onClick={() => pageData.last || setPage(pageData.number + 1)}
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
