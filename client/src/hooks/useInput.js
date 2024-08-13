import { useState } from "react";

/**
 * @typedef {Object} UseInputsAction
 * @property {string} name - 입력 필드의 이름
 * @property {string} value - 입력 필드의 값
 */

/**
 * 하나의 입력 상태를 관리하는 커스텀 훅
 *
 * @template T
 * @param {T} defaultValue - 입력의 기본 값
 * @returns {[T, React.Dispatch<UseInputsAction>]} - 입력 상태와 핸들러
 */
export default function useInputs(defaultValue) {
  const [input, setInput] = useState(defaultValue);

  return [input, (e) => setInput(e.target.value)];
}
