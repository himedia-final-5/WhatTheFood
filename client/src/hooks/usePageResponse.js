import { useCallback, useState } from "react";
import { initialPagination } from "@utils";

/**
 * 페이지 데이터를 관리하는 훅
 *
 * @template T
 * @param {T[]} initialContent
 * @param {number} initialPage
 */
export default function usePageResponse(initialContent = [], initialPage = 0) {
  const [content, setContent] = useState(initialContent);
  const [pagination, setPagination] = useState(initialPagination(initialPage));

  const handlePageResponse = useCallback(({ data }) => {
    setContent(data.content);
    setPagination(data.pagination);
  }, []);

  return {
    content,
    setContent,
    pagination,
    setPagination,
    handlePageResponse,
  };
}
