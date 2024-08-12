import { useEffect, useRef, useState } from "react";
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
  const [content, setContent] = useState([]);
  const [pagination, setPagination] = useState(initialPagination(-1));
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // 관찰 대상이 없거나 이미 데이터를 요청 중이거나 마지막 페이지인 경우 작업 중지
    if (!ref.current || isFetching || pagination.last) {
      return;
    }

    // IntersectionObserver를 이용하여 ref가 화면에 보일 때 fetchMore 호출
    const observer = new IntersectionObserver(
      async ([entry]) => {
        // ref가 화면에 보이지 않으면 작업 중지
        if (!entry.isIntersecting) {
          return;
        }

        // 데이터 요청 중으로 상태 변경 후 다음 페이지 데이터 요청
        setIsFetching(true);
        try {
          const currentContent = await asyncFetchPage(pagination.page + 1);

          // 데이터 요청 결과가 없으면 작업 중지
          if (!currentContent) {
            setIsFetching(false);
            return;
          }

          // 데이터 요청 결과를 컨텐츠에 추가하고 상태 변경
          setContent((prevContent) => [
            ...prevContent,
            ...currentContent.content,
          ]);
          setPagination(currentContent.pagination);

          // 데이터 요청 완료로 상태 변경
          setIsFetching(false);
        } catch (error) {
          // 데이터 요청 실패 시 에러 핸들링 함수 호출
          onError(error);
        } finally {
          // 데이터 요청 완료로 상태 변경
          setIsFetching(false);
        }
      },
      { threshold: 0.1 },
    );

    // ref를 관찰 대상으로 등록
    observer.observe(ref.current);

    // 컴포넌트가 언마운트되면 관찰 중지
    return () => observer.disconnect();
  }, [
    ref,
    asyncFetchPage,
    onError,
    isFetching,
    pagination.last,
    pagination.page,
  ]);

  return { ref, content, pagination, isFetching };
}
