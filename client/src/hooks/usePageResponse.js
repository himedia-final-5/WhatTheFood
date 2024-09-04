import { useCallback, useState } from "react";
import { initialPagination } from "utils";

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
  const setContent = useCallback(
    (newContent) => {
      setPageResponseState((prevState) => ({
        ...prevState,
        content: newContent,
      }));
    },
    [setPageResponseState],
  );

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
