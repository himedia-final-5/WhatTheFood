import { useState } from "react";

import {
  CloseMark,
  TablerCircleKeyFilled,
  TablerUserFilled,
  UndrawEatingTogether,
} from "components/asset";
import { Modal } from "components/util";
import { cn, axios } from "utils";
import { useInputs } from "hooks";
import { useDispatch, loginAction } from "stores";

/**
 * @param {boolean} visible 모달 표시 여부
 * @param {function(boolean)} setVisible 모달 표시 여부 변경 함수
 */
export default function AuthModal({ visible, setVisible }) {
  const dispatch = useDispatch();
  const [isLoginMode, setLoginMode] = useState(true);
  const { inputs, onInputChange } = useInputs({
    username: "",
    password: "",
  });
  const modeText = isLoginMode ? "로그인" : "회원가입";

  async function onFormSubmit() {
    if (!isLoginMode) {
      /** TODO: 회원가입 기능 구현 */
      return alert("회원가입은 준비 중입니다.");
    }

    if (!inputs.username || inputs.username.length < 1) {
      return alert("아이디를 입력하세요.");
    }

    if (!inputs.password || inputs.password.length < 1) {
      return alert("패스워드를 입력하세요.");
    }

    try {
      let result = await axios.post("/api/auth/login", inputs, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      dispatch(loginAction(result.data));
      setVisible(false);
    } catch (err) {
      console.error(err);
      alert("로그인에 실패했습니다");
    }
  }

  async function onSocialLogin(provider) {
    /** TODO: 소셜 로그인 기능 구현 */
    alert("소셜 로그인은 준비 중입니다.");
  }

  return (
    <Modal visible={visible} onOverlayClick={() => setVisible(false)}>
      <div
        className={cn(
          "flex flex-col justify-between w-full h-full m-auto px-8 py-2",
          "bg-white rounded-sm shadow-md shadow-neutral-400",
          "md:w-[640px] md:h-[520px]",
        )}
      >
        <div
          aria-label="auth-modal-header"
          className="flex justify-end w-full md:hidden"
        >
          <CloseMark
            className="top-0 right-0 h-10 -mr-2 p-2 text-neutral-500 cursor-pointer"
            onClick={() => setVisible(false)}
          />
        </div>
        <div
          aria-label="auth-modal-main"
          className="flex flex-col gap-4 items-center w-full flex-1 pt-12"
        >
          <div className="w-full text-2xl font-bold">{modeText}</div>
          <form
            aria-label="auth-input-form"
            className="flex w-full"
            onSubmit={(event) => {
              event.preventDefault();
              onFormSubmit();
            }}
          >
            <div className="flex flex-col flex-1">
              <div
                aria-label="auth-input-username"
                className="w-full h-12 flex"
              >
                <label htmlFor="username" className="flex">
                  <span className="flex items-center px-3 bg-neutral-50 border border-solid border-e-0 border-gray-300 rounded-ss-md">
                    <TablerUserFilled className="w-6 h-8 text-neutral-900 text-opacity-50" />
                  </span>
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  autoCorrect="off"
                  placeholder="아이디"
                  defaultValue={inputs.username}
                  onChange={onInputChange}
                  required
                  className={cn(
                    "block flex-1 min-w-0 w-full p-2.5",
                    "bg-gray-50 border border-solid border-gray-300",
                    "text-gray-900 text-base focus:border-green-500",
                  )}
                />
              </div>
              <div
                aria-label="auth-input-password"
                className="w-full h-12 flex"
              >
                <label htmlFor="password" className="flex">
                  <span className="flex items-center px-3 bg-neutral-50 border border-solid border-e-0 border-gray-300 rounded-es-md">
                    <TablerCircleKeyFilled className="w-6 h-8 text-neutral-900 text-opacity-50" />
                  </span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  autoCorrect="off"
                  placeholder="비밀번호"
                  defaultValue={inputs.password}
                  onChange={onInputChange}
                  required
                  className={cn(
                    "block flex-1 min-w-0 w-full p-2.5",
                    "bg-gray-50 border border-solid border-gray-300",
                    "text-gray-900 text-base focus:border-green-500",
                  )}
                />
              </div>
            </div>
            <div
              aria-label="auth-submit-button"
              className="w-16 h-full bg-green-500 rounded-e-md"
            >
              <button
                type="submit"
                className={cn(
                  "w-full h-full",
                  "text-white text-base font-bold drop-shadow",
                )}
              >
                {modeText}
              </button>
            </div>
          </form>
          <div aria-label="auth-social-login" className="flex flex-col w-full">
            <div className="w-full text-base text-gray-500 my-2">
              소셜 계정으로 {modeText}
            </div>
            <div
              aria-label="auth-social-login-buttons"
              className="flex w- justify-around full gap-4"
            >
              <button
                className="flex items-center justify-center w-24 h-12 border border-solid border-gray-300 rounded-md"
                onClick={() => onSocialLogin("kakao")}
              >
                <img
                  src="/images/kakao.png"
                  alt="카카오 로그인"
                  className="w-8 h-8"
                />
              </button>
              <button
                className="flex items-center justify-center w-24 h-12 border border-solid border-gray-300 rounded-md"
                onClick={() => onSocialLogin("google")}
              >
                <img
                  src="/images/google.png"
                  alt="구글 로그인"
                  className="w-8 h-8"
                />
              </button>
              <button
                className="flex items-center justify-center w-24 h-12 border border-solid border-gray-300 rounded-md"
                onClick={() => onSocialLogin("naver")}
              >
                <img
                  src="/images/naver.png"
                  alt="네이버 로그인"
                  className="w-8 h-8"
                />
              </button>
            </div>
          </div>
        </div>
        <div
          aria-label="auth-modal-footer"
          className="flex justify-between items-end"
        >
          <UndrawEatingTogether width="12rem" />
          <div aria-label="mode-change-button" className="flex">
            <div className="text-base text-green-600 mb-8 mr-4">
              {isLoginMode ? "계정이 없으신가요?" : "계정이 있으신가요?"}
              <button
                className="font-bold ml-2"
                onClick={() => setLoginMode(!isLoginMode)}
              >
                {isLoginMode ? "회원가입" : "로그인"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
