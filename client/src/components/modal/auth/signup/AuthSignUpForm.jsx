import { toast } from "react-toastify";

import { TablerCircleKeyFilled, TablerUserFilled } from "components/asset";
import { cn } from "utils";
import { useInputs } from "hooks";

export default function AuthSignUpForm() {
  const { inputs, onInputChange } = useInputs({});

  async function onFormSubmit() {
    /** TODO: 회원가입 기능 구현 */
    return toast.warn("회원가입은 준비 중입니다.");
  }

  return (
    <form
      aria-label="auth-input-form"
      className="flex w-full h-fit"
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit();
      }}
    >
      <div className="flex flex-col flex-1">
        <div aria-label="auth-input-username" className="w-full h-12 flex">
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
        <div aria-label="auth-input-password" className="w-full h-12 flex">
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
          회원가입
        </button>
      </div>
    </form>
  );
}
