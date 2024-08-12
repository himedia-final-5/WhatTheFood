import { useEffect, useRef, useState } from "react";

/**
 * @param {boolean} initialValue - 초기 토글 값
 * @returns {[React.RefObject<HTMLElement>, boolean, function(boolean): void]}
 */
export default function useToggleElement(initialValue = false) {
  /** @type {React.RefObject<HTMLElement>} */
  const ref = useRef(null);
  const [isToggled, setToggle] = useState(initialValue);

  // ref가 업데이트되면 이벤트 리스너 등록
  useEffect(() => {
    // ref가 없으면 작업 중지
    if (!ref.current) {
      return;
    }

    // ref 바깥을 클릭하면 토글 값을 false로 변경
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    }

    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref]);

  // ref와 토글 상태, 토글 함수 반환
  return [ref, isToggled, setToggle];
}
