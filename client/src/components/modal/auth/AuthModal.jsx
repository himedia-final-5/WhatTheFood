import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import { useToggle } from "@reactuses/core";

import {
  CloseMark,
  UndrawEatingTogether,
  LogoKakao,
  LogoGoogle,
  LogoNaver,
} from "components/asset";
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
              className="relative flex w-full justify-end md:hidden"
            >
              <CloseMark
                className="absolute top-1 -right-4 h-10 text-neutral-500 cursor-pointer"
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
                  className="flex w-full justify-around gap-4"
                >
                  {[
                    ["kakao", "카카오", "#ffeb00", LogoKakao],
                    ["google", "구글", "transparent", LogoGoogle],
                    ["naver", "네이버", "#00bf18", LogoNaver],
                  ].map(([provider, name, backgroundColor, Logo]) => (
                    <div
                      key={provider}
                      className="flex items-center justify-center px-4 py-1 border border-gray-300 rounded-md"
                      style={{ backgroundColor }}
                    >
                      <Logo
                        key={provider}
                        onClick={() => onSocialLogin(provider)}
                        className="h-10 cursor-pointer"
                        alt={`${name} 로그인`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              aria-label="auth-modal-footer"
              className="flex justify-between items-end"
            >
              <UndrawEatingTogether width="12rem" className="text-green-600" />
              <div aria-label="mode-change-button" className="flex">
                <div className="text-base text-green-600 mb-24 md:mb-8 mr-4">
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
