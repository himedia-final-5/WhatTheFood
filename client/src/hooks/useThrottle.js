import { useCallback, useMemo } from "react";
import { throttle } from "@utils";

/**
 * 쓰로틀링 함수 (특정 시간 동안 함수 호출을 제한)
 *
 * @template Args
 * @param {(...args: Args) => any} func - 쓰로틀링할 함수
 * @param {number} wait - 쓰로틀링 시간 (밀리초)
 * @returns {(...args: Args) => void} 쓰로틀링된 함수
 */
export default function useThrottle(fn, wait) {
  const throttledFn = useMemo(() => throttle(fn, wait), [fn, wait]);
  return useCallback((...args) => throttledFn(...args), [throttledFn]);
}
