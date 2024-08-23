import { useRef, useCallback } from "react";

/**
 * @param {function} fn - 쓰로틀링을 적용할 함수
 * @param {number} delay - 쓰로틀링 간격
 */
function throttle(delay) {
  let lastCall = 0;

  return function (fn, ...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

/**
 * @param {function} fn - 쓰로틀링을 적용할 함수
 * @param {number} delay - 쓰로틀링 간격
 */
export default function useThrottle(fn, delay) {
  const throttledFn = useRef(throttle(delay));

  return useCallback((...args) => throttledFn.current(fn, ...args), [fn]);
}
