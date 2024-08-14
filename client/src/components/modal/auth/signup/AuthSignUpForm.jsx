import { toast } from "react-toastify";

import { TablerCircleKeyFilled, TablerMailFilled } from "components/asset";
import { cn, axios } from "utils";
import useInput from "hooks/useInput";
import usePromise from "hooks/usePromise";
import Input from "components/form/Input";

export default function AuthSignUpForm() {
  const [email, onEmailInputChange] = useInput("");
  const [token, onTokenInputChange] = useInput("");

  const [sendEmail, emailSent, isEmailSendingInProgress] = usePromise(
    false,
    async () =>
      (
        await axios.post("/api/auth/signup/verify-email", null, {
          params: { email },
        })
      )?.status === 204,
  );

  async function onRequireSendMail() {
    if (emailSent || isEmailSendingInProgress) {
      toast.warn("이메일이 이미 전송되었거나 전송 중입니다.");
      return;
    }
    toast.promise(sendEmail(), {
      pending: "회원가입 메일을 전송 중입니다.",
      success: "이메일이 전송되었습니다. 확인해주세요.",
      error: {
        render({ data: error }) {
          return error?.toastMessage || "이메일 전송에 실패했습니다.";
        },
      },
    });
  }

  return (
    <div
      className={cn(
        "w-full h-fit transition-shape",
        emailSent ? "mb-0" : "mb-12",
      )}
    >
      <form
        aria-label="auth-input-form"
        className="flex w-full h-full"
        onSubmit={(event) => {
          event.preventDefault();

          // 이메일이 전송되지 않았을 때 이메일 전송 요청
          if (!emailSent && !isEmailSendingInProgress) {
            onRequireSendMail();
          }
        }}
      >
        <div className="flex flex-col flex-1">
          <div aria-label="auth-input-email" className="flex w-full h-12 z-20">
            <Input
              name="email"
              labelProps={{
                className: cn(
                  "flex items-center px-3 transition-shape",
                  "bg-neutral-50 border border-solid border-e-0 border-gray-300",
                  emailSent ? "rounded-ss-md" : "rounded-l-md",
                ),
              }}
              type={emailSent || isEmailSendingInProgress ? "none" : "email"}
              autoComplete={
                emailSent || isEmailSendingInProgress ? "none" : "email"
              }
              autoCorrect="off"
              placeholder="회원가입할 이메일"
              onChange={onEmailInputChange}
              readOnly={emailSent || isEmailSendingInProgress}
              disabled={emailSent || isEmailSendingInProgress}
              required
              className={cn(
                "block flex-1 min-w-0 w-full p-2.5",
                "bg-gray-50 border border-solid border-gray-300",
                "text-gray-900 text-base focus:border-green-500",
              )}
            >
              <TablerMailFilled className="w-6 h-8 text-neutral-900 text-opacity-50" />
            </Input>
          </div>
          <div
            aria-label="auth-input-token"
            className={cn(
              "flex w-full h-12 transition-shape z-10",
              emailSent ? "mt-0" : "-mt-12",
            )}
          >
            <Input
              name="token"
              labelProps={{
                className: cn(
                  "flex items-center px-3 transition-shape",
                  "bg-neutral-50 border border-solid border-e-0 border-gray-300",
                  emailSent ? "rounded-es-md" : "rounded-l-md",
                ),
              }}
              type="token"
              autoComplete="none"
              autoCorrect="off"
              placeholder="메일로 전송된 토큰"
              onChange={onTokenInputChange}
              required
              readOnly={!emailSent}
              className={cn(
                "block flex-1 min-w-0 w-full p-2.5",
                "bg-gray-50 border border-solid border-gray-300",
                "text-gray-900 text-base focus:border-green-500",
              )}
            >
              <TablerCircleKeyFilled className="w-6 h-8 text-neutral-900 text-opacity-50" />
            </Input>
          </div>
        </div>
        <div
          aria-label="auth-submit-button"
          className="w-16 bg-green-500 rounded-e-md"
        >
          <button
            type="submit"
            className={cn(
              "w-full h-full",
              "text-white text-base font-bold drop-shadow",
            )}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
