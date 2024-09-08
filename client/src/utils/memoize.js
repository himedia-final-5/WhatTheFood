/**
 * 메모이제이션 함수 (함수의 반환 값을 캐싱해 재사용)
 *
 * - 목적 1) 함수의 반환 값을 캐싱하여 성능 향상
 * - 목적 2) 시간이 오래 걸리는 로직의 반복을 피함 (예: API 호출)
 *
 * @template T
 * @param {(...args: any[]) => T} func - 메모이제이션할 함수
 * @returns {(...args: any[]) => T} 메모이제이션된 함수
 *
 * @link https://en.wikipedia.org/wiki/Memoization
 */
export default function memoize(func) {
  const resultCacheMap = new Map();

  return (...args) => {
    // 캐시 키 생성
    const key = JSON.stringify(args);

    // 캐시에 값이 있으면 반환
    if (resultCacheMap.has(key)) {
      return resultCacheMap.get(key);
    }

    // 캐시에 값이 없으면 함수 실행
    const result = func(...args);

    // 함수 실행 결과를 캐시에 저장
    resultCacheMap.set(key, result);

    // 함수 실행 결과를 반환
    return result;
  };
}
