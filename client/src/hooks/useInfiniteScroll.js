import React, { useEffect, useRef, useState, useCallback } from "react";
import { initialPagination, defaultErrorHandler } from "utils";

/**
 * @template T
 * @param {(page: number) => Promise<PageResponse<T>>} asyncFetchPage - 페이지 데이터 요청 함수
 * @param {(error: Error) => void} [onError] - 데이터 요청 실패 시 호출할 함수
 */
export default function useInfiniteScroll(
  asyncFetchPage,
  onError = defaultErrorHandler,
) {
  /** @type {React.RefObject<HTMLElement>} */
  const ref = useRef(null);
  /** @type {[T[], React.Dispatch<React.SetStateAction<T[]>>]} */
  const [content, setContent] = useState([]);
  const [pagination, setPagination] = useState(initialPagination(-1));
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!ref.current || isFetching || pagination.last) {
      return;
    }

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsFetching(true);
        try {
          const currentContent = await asyncFetchPage(pagination.page + 1);

          if (!currentContent) {
            setIsFetching(false);
            return;
          }

          setContent((prevContent) => [
            ...prevContent,
            ...currentContent.content,
          ]);
          setPagination(currentContent.pagination);

          setIsFetching(false);
        } catch (error) {
          onError(error);
        } finally {
          setIsFetching(false);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [
    ref,
    asyncFetchPage,
    onError,
    isFetching,
    pagination.last,
    pagination.page,
  ]);

  const reset = useCallback(() => {
    setContent([]);
    setPagination(initialPagination(-1));
  }, []);

  return { ref, content, pagination, isFetching, reset };
}
