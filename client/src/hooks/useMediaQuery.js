import { useState, useEffect } from "react";

/**
 * 주어진 미디어 쿼리에 대한 매치 여부를 추적하는 커스텀 훅
 *
 * @param {string} query - 확인할 미디어 쿼리 문자열
 * @returns {boolean} 현재 미디어 쿼리 매치 여부
 */
export default function useMediaQuery(query) {
  // 초기 상태를 window.matchMedia(query).matches로 설정
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const updateMatches = (event) => {
      setMatches(event.matches);
    };

    // 미디어 쿼리 변경 이벤트 리스너 추가
    mediaQuery.addEventListener("change", updateMatches);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
}
