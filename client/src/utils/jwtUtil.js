import axios from "axios";
import store from "../stores";
import { loginAction, logoutAction } from "../stores/userSlice";

const getUser = () => store.getState().user;
const jaxios = axios.create();

// 반복적인 재발급 요청을 방지하기 위해 토큰 갱신 중인지 여부를 저장하는 변수
let refreshingToken = false;
// 토큰 갱신 중인 동안 대기 중인 요청을 저장하는 배열
let subscribers = [];

/** axios 요청 전송을 가로채 요청 정보를 변경하는 인터셉터 */
const requestInterceptor = (config) => {
  // 로그인 정보를 저장소로부터 가져오기
  const user = getUser();

  // 로그인 정보가 없으면 바로 반환
  if (!user) {
    return config;
  }

  // 로그인 정보가 있으면 요청 헤더의 Authorization 값으로 지정
  config.headers.Authorization = `Bearer ${user.accessToken}`;

  // 요청 정보 반환
  return config;
};
jaxios.interceptors.request.use(requestInterceptor, console.log);

/** axios 실패 응답을 가로채 토큰 갱신을 시도하는 인터셉터 */
const responseInterceptor = async (error) => {
  // 로그인 정보를 저장소로부터 가져오기
  const user = getUser();

  // 로그인 정보가 없으면 바로 반환
  if (!user) {
    return Promise.reject(error);
  }

  // 응답이 401(인증 실패)가 아니면 바로 반환
  if (error.response.status !== 401) {
    return Promise.reject(error);
  }

  // 요청 정보를 가져오기
  const requestConfig = error.config;

  // 요청 정보에 _retry 속성이 있으면 바로 반환
  if (requestConfig._retry) {
    return Promise.reject(error);
  }

  // 토큰 갱신 중이면 대기열에 추가
  if (refreshingToken) {
    return new Promise((resolve) => {
      subscribers.push(() => {
        // 로그인 정보를 저장소로부터 가져오기
        const user = getUser();

        // 로그인 정보가 없으면 바로 반환
        if (!user) {
          return Promise.reject(error);
        }

        // 토큰 갱신 후 요청 정보에 Authorization 헤더 추가
        requestConfig.headers.Authorization = `Bearer ${user.refreshToken}`;
        requestConfig._retry = true;
        resolve(jaxios(requestConfig));
      });
    });
  }

  try {
    // 토큰 갱신 요청
    refreshingToken = true;
    const response = await axios.post("/api/auth/reissue", null, {
      headers: {
        Refresh: user.refreshToken,
      },
    });

    // 토큰 갱신 성공 시 저장소에 저장 후 토큰 갱신 완료 함수 호출
    store.dispatch(loginAction(response.data));
    subscribers.forEach((callback) => callback());
    subscribers = [];
    refreshingToken = false;

    // 요청 정보에 _retry 속성 추가
    requestConfig._retry = true;

    // 요청 재시도 후 반환
    return jaxios(requestConfig);
  } catch (refreshError) {
    // 토큰 갱신 실패 시 콘솔에 로그 출력
    console.error("Token refresh failed:", refreshError);

    // 로그인 정보 삭제
    store.dispatch(logoutAction());
    return Promise.reject(error);
  }
};
jaxios.interceptors.response.use((response) => response, responseInterceptor);

export default jaxios;
