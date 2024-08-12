import { useReducer, useCallback, useMemo } from "react";

/**
 * @typedef {Object} UseInputsAction
 * @property {string} name - 입력 필드의 이름
 * @property {string} value - 입력 필드의 값
 */

/**
 * 입력 상태를 관리하는 리듀서 함수
 *
 * @param {Object.<string, string>} state - 현재 입력 상태
 * @param {UseInputsAction | null} action - 상태를 업데이트하는 액션
 * @returns {Object.<string, string>} - 업데이트된 상태
 */
function reducer(state, action) {
  if (!action) {
    const initialState = {};
    Object.keys(state).forEach((key) => {
      initialState[key] = "";
    });
    return initialState;
  }
  return {
    ...state,
    [action.name]: action.value,
  };
}

/**
 * 여러 입력 상태를 관리하는 커스텀 훅
 *
 * @template T
 * @param {T} defaultValues - 입력의 기본 값
 * @returns {{
 *   inputs: T,
 *   onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
 *   onReset: () => void,
 *   dispatch: React.Dispatch<UseInputsAction | null>
 * }} - 입력  상태와 핸들러
 */
export default function useInputs(defaultValues) {
  const values = useMemo(() => defaultValues, [defaultValues]);
  const [inputs, dispatch] = useReducer(reducer, values);

  const onInputChange = useCallback((e) => {
    dispatch({
      name: e.target.name,
      value: e.target.value,
    });
  }, []);

  const onReset = useCallback(() => dispatch(), []);

  return { inputs, dispatch, onInputChange, onReset };
}
