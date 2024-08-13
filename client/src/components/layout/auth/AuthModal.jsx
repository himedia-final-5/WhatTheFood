import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import { useToggle } from "@reactuses/core";

import { CloseMark, UndrawEatingTogether } from "components/asset";
import { Modal } from "components/util";
import { AuthSignInForm, AuthSignUpForm } from "./index.js";
import { cn } from "utils";

/**
 * @param {boolean} visible 모달 표시 여부
 * @param {function(boolean)} setVisible 모달 표시 여부 변경 함수
 */
export default function AuthModal({ visible, setVisible }) {
  const [isSignIn, toggleSignIn] = useToggle(true);
  const modeText = isSignIn ? "로그인" : "회원가입";

  async function onSocialLogin(provider) {
    /** TODO: 소셜 로그인 기능 구현 */
    toast.warn("소셜 로그인은 준비 중입니다.");
  }

  return (
    <>
      {createPortal(
        <Modal visible={visible} onOverlayClick={() => setVisible(false)}>
          <div
            className={cn(
              "flex flex-col justify-between w-full h-full m-auto px-8 py-2",
              "bg-white rounded-xl shadow-md shadow-neutral-400",
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
              {isSignIn ? (
                <AuthSignInForm setVisible={setVisible} />
              ) : (
                <AuthSignUpForm />
              )}
              <div aria-label="auth-social" className="flex flex-col w-full">
                <div className="w-full text-base text-gray-500 my-2">
                  소셜 계정으로 {modeText}
                </div>
                <div
                  aria-label="auth-social-buttons"
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
                  {isSignIn ? "계정이 없으신가요?" : "계정이 있으신가요?"}
                  <button className="font-bold ml-2" onClick={toggleSignIn}>
                    {isSignIn ? "회원가입" : "로그인"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>,
        document.getElementById("modal"),
      )}
    </>
  );
}
