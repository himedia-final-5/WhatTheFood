import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * SearchParam 상태 관리를 위한 커스텀 훅
 * @param {string} paramName - 관리할 SearchParam의 이름
 * @param {string} defaultValue - 기본값
 * @param {boolean} [omitDefault=false] - 기본값일 때 URL에서 파라미터를 생략할지 여부
 * @returns {[string, (value: string) => void]} 현재 값과 값 변경 함수
 */
export default function useSearchParamState(
  paramName,
  defaultValue,
  omitDefault = true,
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(paramName) || defaultValue;

  const setValue = useCallback(
    (newValue) => {
      setSearchParams((prev) => {
        const updatedParams = new URLSearchParams(prev);
        if (omitDefault && newValue === defaultValue) {
          updatedParams.delete(paramName);
        } else {
          updatedParams.set(paramName, newValue);
        }

        return updatedParams;
      });
    },
    [setSearchParams, paramName, defaultValue, omitDefault],
  );

  return [value, setValue];
}
