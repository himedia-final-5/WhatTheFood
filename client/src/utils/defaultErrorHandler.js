import { toast } from "react-toastify";

/**
 * 오류를 핸들링해 사용자에게 토스트 알림을 띄웁니다.
 *
 * @param {Error} error
 */
export default function defaultErrorHandler(error) {
  // 디버그가 필요할 때만 아래 주석을 해제합니다.
  // console.error(error);
  toast.error(error.toastMessage ?? "알 수 없는 오류가 발생했습니다.");
}
