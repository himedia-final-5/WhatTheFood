import { useState } from "react";

/**
 * @template T
 * @returns {PageResponse<T>} */
const initialPageResponse = () => ({
  content: [],
  pagination: {
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0,
    first: false,
    last: false,
  },
});

/**
 * @template T
 * @param {PageResponse<T>} pageResponse
 */
export default function usePageResponse(pageResponse = initialPageResponse()) {
  const [pageResponseState, setPageResponseState] = useState(pageResponse);

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
