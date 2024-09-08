/**
 * 디바운스 함수 (특정 시간 동안 호출이 중단된 후에 대상 함수를 호출)
 *
 * 주로 사용자 이벤트가 멈춘 후에 반응하는 것이 효율적인 입력 필드 검색 등에 사용
 *
 * - 목적 1) 함수 호출 속도를 조절하여 성능 향상
 * - 목적 2) 연속적인 이벤트 발생 시 마지막 이벤트만 처리
 *
 * @template Args
 * @param {(...args: Args) => any} func - 디바운스할 함수
 * @param {number} wait - 디바운스 시간 (밀리초)
 * @returns {(...args: Args) => void} 디바운스된 함수
 *
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Debounce
 */
export default function debounce(func, wait = 300) {
  /** @type {NodeJS.Timeout | undefined} */
  let timeoutId;

  return (...args) => {
    // 이전 타이머가 있으면 취소
    if (timeoutId) clearTimeout(timeoutId);

    // 새로운 타이머 설정
    timeoutId = setTimeout(() => func(...args), wait);
  };
}
