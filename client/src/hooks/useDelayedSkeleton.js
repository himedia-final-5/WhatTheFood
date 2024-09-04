import { useState, useEffect } from "react";

/**
 * 불필요한 UI 깜빡임을 줄이기 위해 스켈레톤 UI 표시를 지연하는 데에 사용되는 커스텀 훅
 *
 * @param {boolean} isFetching - 데이터를 가져오는 중인지 여부 (true: 가져오는 중, false: 가져오지 않는 중)
 * @param {number} [delay=300] - 스켈레톤 UI 표시 지연 시간 (밀리초)
 *
 * @returns {boolean} 스켈레톤 UI 표시 여부
 */
export default function useDelayedSkeleton(isFetching, delay = 300) {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    let timer;

    if (isFetching) {
      timer = setTimeout(() => setShowSkeleton(true), delay);
    } else {
      setShowSkeleton(false);
    }

    return () => clearTimeout(timer);
  }, [isFetching, delay]);

  return showSkeleton;
}
