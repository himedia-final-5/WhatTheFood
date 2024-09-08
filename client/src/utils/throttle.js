/**
 * 쓰로틀링 함수 (특정 시간 동안 함수 호출을 제한)
 *
 * 주로 잦은 이벤트 발생 시 함수 호출을 제한하는 용도로 사용
 *
 * - 목적 1) 함수 호출 속도를 조절하여 성능 향상
 * - 목적 2) 연속적인 이벤트 발생 시 함수 호출을 제한 (스크롤 등)
 *
 * @template Args
 * @param {(...args: Args) => any} func - 쓰로틀링할 함수
 * @param {number} wait - 쓰로틀링 시간 (밀리초)
 * @returns {(...args: Args) => void} 쓰로틀링된 함수
 */
export default function throttle(func, wait) {
  // 쓰로틀링 상태 여부
  let throttled = false;

  return (...args) => {
    // 쓰로틀링 상태면 함수 호출 중지
    if (throttled) return;

    // 쓰로틀링 상태 설정
    throttled = true;

    // 쓰로틀링 상태 해제 타이머 설정
    setTimeout(() => (throttled = false), wait);

    // 함수 호출
    func(...args);
  };
}
