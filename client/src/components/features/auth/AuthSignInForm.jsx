import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { IconCircleKeyFilled, IconUserFilled } from "@tabler/icons-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/shadcn/ui/form";
import { Button } from "components/shadcn/ui/button";
import { Input } from "components/shadcn/ui/input";
import { cn, axios } from "utils";
import { useDispatch, signinAction } from "stores";

const formSchema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "아이디는 영어, 숫자, 언더스코어(_)만 사용할 수 있습니다",
    })
    .min(4, {
      message: "아이디는 최소 4자 이상이어야 합니다",
    })
    .max(45, {
      message: "아이디는 최대 45자 이하여야 합니다",
    }),
  password: z
    .string()
    .min(4, {
      message: "비밀번호는 최소 4자 이상이어야 합니다",
    })
    .max(45, {
      message: "비밀번호는 최대 45자 이하여야 합니다",
    }),
});

/**
 * @param {function(boolean)} setVisible 모달 표시 여부 변경 함수
 */
export default function AuthSignInForm({ setVisible }) {
  const dispatch = useDispatch();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  /** @param {z.infer<typeof formSchema>} */
  function onSubmit(inputs) {
    /** @type {(request: SignInRequest) => Promise<User>} */
    async function signIn(request) {
      /** @type {import("axios").AxiosResponse<User>} */
      const response = await axios.post("/api/auth/signin", request, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      return response.data;
    }

    toast.promise(signIn(inputs), {
      pending: "로그인 중입니다",
      success: {
        render({ data }) {
          dispatch(signinAction(data));
          setVisible && setVisible(false);
          return "로그인에 성공했습니다";
        },
      },
      error: "로그인에 실패했습니다",
    });
  }

  return (
    <>
      <Form {...form} className="mb-10">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          aria-label="auth-input-form"
          className="flex w-full h-fit mb-10"
          noValidate
        >
          <div aria-label="auth-input-fields" className="flex flex-col flex-1">
            <FormField
              aria-label="auth-input-username"
              className="flex w-full h-12"
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="relative w-full h-12">
                  <div className="w-full h-12 flex">
                    <FormLabel className="flex items-center px-3 bg-neutral-50 border border-solid border-e-0 border-gray-300 rounded-ss-md">
                      <IconUserFilled className="w-6 h-8 opacity-70" />
                    </FormLabel>
                    <FormControl className="w-full h-full !m-0 rounded-none ring-primary">
                      <Input
                        type="text"
                        autoComplete="username"
                        autoCorrect="off"
                        placeholder="아이디"
                        required
                        className={cn(
                          "block flex-1 min-w-0 w-full p-2.5",
                          "bg-gray-50 border border-solid border-gray-300",
                          "text-gray-900 text-base focus:z-20",
                          "aria-[invalid=false]:ring-primary aria-[invalid=true]:ring-destructive",
                        )}
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormDescription></FormDescription>
                  <FormMessage
                    className={cn(
                      "absolute bottom-14 left-12 text-nowrap font-bold",
                      "px-1 py-2 bg-white z-40",
                      "border-2 border-solid border-destructive rounded-lg",
                      "animate-head-shake",
                    )}
                  />
                </FormItem>
              )}
            />
            <FormField
              aria-label="auth-input-username"
              className="flex w-full h-12"
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative w-full h-12">
                  <div className="w-full h-12 flex">
                    <FormLabel className="flex items-center px-3 bg-neutral-50 border border-solid border-e-0 border-gray-300 rounded-es-md">
                      <IconCircleKeyFilled className="w-6 h-8 opacity-70" />
                    </FormLabel>
                    <FormControl className="w-full h-full !m-0 rounded-none">
                      <Input
                        type="password"
                        autoComplete="password"
                        autoCorrect="off"
                        placeholder="비밀번호"
                        required
                        className={cn(
                          "block flex-1 min-w-0 w-full p-2.5",
                          "bg-gray-50 border border-solid border-gray-300",
                          "text-gray-900 text-base focus:z-20",
                          "aria-[invalid=false]:ring-primary aria-[invalid=true]:ring-destructive",
                        )}
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormDescription></FormDescription>
                  <FormMessage
                    className={cn(
                      "absolute top-12 left-12 text-nowrap font-bold",
                      "px-1 py-2 bg-white z-40",
                      "border-2 border-solid border-destructive rounded-lg",
                      "animate-head-shake",
                    )}
                  />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-16 h-24 bg-primary rounded-e-md rounded-s-none"
          >
            <p className="text-base text-white text-nowrap font-bold drop-shadow-sm">
              로그인
            </p>
          </Button>
        </form>
      </Form>
    </>
  );
}
