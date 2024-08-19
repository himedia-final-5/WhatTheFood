import { useSearchParams } from "react-router-dom";

import { axios } from "utils";
import store, { signinAction } from "stores";

export default function OAuth2LoginPopup() {
  const [searchParams] = useSearchParams();
  const error = searchParams.get("error");
  const code = searchParams.get("code");

  // 부모 창이 없는 경우 경고 후 창 닫기
  if (!window.opener) {
    alert("잘못된 접근입니다.");
    return window.close();
  }

  // error가 있거나, code가 없는 경우 로그인 실패 처리
  if (error || !code) {
    alert("로그인에 실패했습니다.");
    return window.close();
  }

  // 코드를 통해 토큰 갱신 요청
  axios
    .post("/api/auth/reissue", null, {
      headers: {
        Refresh: code,
      },
    })
    .then((response) => {
      // 토큰 갱신 성공 시 로그인 처리 후 부모 창 새로고침
      store.dispatch(signinAction(response.data));
      window.opener.location.reload();
    })
    .catch(() => alert("로그인에 실패했습니다."))
    .finally(() => window.close());

  return <>로그인 중...</>;
}
