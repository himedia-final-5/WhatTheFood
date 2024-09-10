import { useNavigate, useParams } from "react-router-dom";

import { axios } from "@utils";
import store, { signinAction } from "@stores";
import { toast } from "react-toastify";

export default function EmailLogin() {
  const navigate = useNavigate();
  const { token } = useParams();

  // 토큰이 없는 경우 경고 후 창 닫기
  if (!token) {
    alert("잘못된 접근입니다.");
    return window.close();
  }

  // 코드를 통해 토큰 갱신 요청
  axios
    .post("/api/auth/signup/email/verify", null, {
      params: { token },
    })
    .then((response) => {
      // 토큰 갱신 성공 시 로그인 처리 후 부모 창 새로고침
      store.dispatch(signinAction(response.data));
      toast.success("로그인되었습니다.");
      navigate("/");
    })
    .catch(() => toast.error("로그인에 실패했습니다."));

  return <>로그인 중...</>;
}
