import { axios, toastify } from "utils";

/** @type {[keyof import("axios").Axios]} */
const DELEGATE_METHODS = [
  "get",
  "delete",
  "post",
  "put",
  "patch",
  "postForm",
  "putForm",
  "patchForm",
];

/**
 * @type { ToastifyAxios } toastifyAxios
 */
const toastifyAxios = Object.fromEntries(
  Object.entries(axios) // axios 객체의 메서드와 필드 추출
    .filter(([key]) => DELEGATE_METHODS.includes(key)) // 대상이 되는 메서드만 추출
    .reduce((acc, [methodName, method]) => {
      // toastify 메서드로 변환
      acc[methodName] = (url, config, toastifyOptions) => {
        return toastify(
          method(url, config).then((response) => response.data), // axios 메서드 실행 후 response의 data만 반환
          toastifyOptions, // toastify 옵션 전달
        );
      };
      return acc;
    }),
);

export default toastifyAxios;
