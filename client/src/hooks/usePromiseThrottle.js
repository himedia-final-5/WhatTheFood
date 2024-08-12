import { useState } from "react";

/**
 * @param {number} interval - 프로미스 실행 간격
 * @param {number} limit - 동시에 실행 가능한 프로미스 개수
 */
export default function usePromiseThrottle(interval = 5000, limit = 1) {
  const [executionTimeQueue, setExecutionTimeQueue] = useState([]);

  function getDelay() {
    const now = Date.now();

    // 현재 시간과 마지막 실행의 시간 차이가 interval보다 크면 스택 초기화 후 바로 실행
    if (
      executionTimeQueue.length !== 0 &&
      now - executionTimeQueue.at(-1) > interval
    ) {
      setExecutionTimeQueue([]);
      return 0;
    }

    // 스택이 limit보다 작으면 바로 실행
    if (executionTimeQueue.length < limit) {
      setExecutionTimeQueue((currentQueue) => [...currentQueue, now]);
      return 0;
    }

    // 다음 실행 시간 계산
    const nextExecutionTime = executionTimeQueue[0] + interval;

    // 가장 빠른 실행 시간을 가진 프로미스를 제거하고 다음 실행 시간을 스택에 추가
    setExecutionTimeQueue((currentQueue) => [
      ...currentQueue.slice(1),
      nextExecutionTime,
    ]);

    // 다음 실행 시간 반환
    return Math.max(0, nextExecutionTime - now);
  }

  /** @type {<T, PromiseArgs>(promise: (...args: PromiseArgs) => Promise<T>) => (...args: PromiseArgs) => Promise<T>} */
  return (promise) =>
    function (...args) {
      return new Promise((resolve, reject) => {
        const execute = () => {
          resolve(promise.apply(this, args));
        };

        const delay = getDelay();
        if (delay > 0) {
          setTimeout(execute, delay);
        } else {
          execute();
        }
      });
    };
}
