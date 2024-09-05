import { useRef, useEffect } from "react";

/**
 * 컴포넌트의 첫 번째 마운트 여부를 확인하는 커스텀 훅
 *
 * @returns {boolean} 컴포넌트가 처음 마운트되었는지 여부
 */
export default function useFirstMount() {
  // 첫 번째 마운트 여부를 저장하는 ref
  const isFirstMount = useRef(true);

  useEffect(() => {
    // 첫 번째 렌더링 이후에 false로 설정
    isFirstMount.current = false;
  }, []);

  // 현재 첫 번째 마운트 상태 반환
  return isFirstMount.current;
}
