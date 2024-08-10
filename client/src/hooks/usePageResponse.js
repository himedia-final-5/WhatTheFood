import { useState } from "react";

/** @returns {Pagination}*/
const initialPagination = () => ({
  page: 0,
  size: 10,
  totalElements: 0,
  totalPages: 0,
  first: false,
  last: false,
});

/**
 * @template T
 * @param {?T[]} content
 * @param {?Pagination} pagination
 */
export default function usePageResponse(content, pagination) {
  if (!content) {
    content = [];
  }
  if (!pagination) {
    pagination = initialPagination();
  }
  const [pageResponseState, setPageResponseState] = useState({
    content,
    pagination,
  });

  /**
   * @type {React.Dispatch<React.SetStateAction<T[]>>}
   */
  const setContent = (newContent) => {
    setPageResponseState((prevState) => ({
      ...prevState,
      content: newContent,
    }));
  };

  /**
   * @type {React.Dispatch<React.SetStateAction<Pagination>>}
   */
  const setPagination = (newPagination) => {
    setPageResponseState((prevState) => ({
      ...prevState,
      pagination: newPagination,
    }));
  };

  return {
    pageResponse: pageResponseState,
    setPageResponse: setPageResponseState,
    get content() {
      return pageResponseState.content;
    },
    setContent,
    get pagination() {
      return pageResponseState.pagination;
    },
    setPagination,
  };
}
