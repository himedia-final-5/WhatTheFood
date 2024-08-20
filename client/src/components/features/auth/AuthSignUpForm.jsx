import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";

import {
  TablerCircleKeyFilled,
  TablerUserFilled,
  TablerMailFilled,
} from "components/asset";
import { cn, axios, debounce, memoize } from "utils";
import usePromise from "hooks/usePromise";

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

const formSchema = z
  .object({
    username: z
      .string()
      .regex(/^[a-zA-Z0-9_]+$/, "아이디는 영숫자와 _만 사용할 수 있습니다")
      .min(4, "아이디는 최소 4자 이상이어야 합니다")
      .max(45, "아이디는 최대 45자 이하여야 합니다")
      .refine(
        debounce(
          memoize(async (username) => {
            try {
              await axios.get("/api/members/check-username", {
                params: { username },
              });
              return true;
            } catch (error) {
              console.error(error);
              return false;
            }
          }),
          300,
        ),
        "이미 사용중인 아이디입니다",
      ),
    password: z
      .string()
      .min(4, "비밀번호는 최소 4자 이상이어야 합니다")
      .max(45, "비밀번호는 최대 45자 이하여야 합니다"),
    confirmPassword: z
      .string()
      .min(4, "비밀번호 확인은 최소 4자 이상이어야 합니다")
      .max(45, "비밀번호 확인은 최대 45자 이하여야 합니다"),
    email: z
      .string()
      .email("이메일 형식이 아닙니다")
      .max(45, "이메일은 최대 45자 이하여야 합니다"),
  })
  .refine(
    debounce(async (data) => data.password === data.confirmPassword, 100),
    {
      message: "비밀번호와 비밀번호 확인이 일치하지 않습니다",
      path: ["confirmPassword"],
    },
  );

function InputFormField({ control, name, children, ...props }) {
  return (
    <FormField
      aria-label={`auth-input-${name}`}
      className="flex w-full h-12"
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative w-full h-12">
          <div className="w-full h-12 flex">
            <FormLabel className="flex items-center px-3 bg-neutral-50 border border-e-0 border-gray-300">
              {children}
            </FormLabel>
            <FormControl className="w-full h-full !m-0 rounded-none">
              <Input
                required
                className={cn(
                  "block flex-1 min-w-0 w-full p-2.5",
                  "bg-gray-50 border border-gray-300",
                  "text-gray-900 text-base focus:z-20",
                  "aria-[invalid=false]:ring-primary aria-[invalid=true]:ring-destructive",
                )}
                {...props}
                {...field}
              />
            </FormControl>
          </div>
          <FormDescription></FormDescription>
          <FormMessage
            className={cn(
              "absolute right-80 -top-1 text-nowrap font-bold",
              "px-1 py-2 bg-white z-40",
              "border-2 border-destructive rounded-lg",
              "animate-head-shake duration-500",
            )}
          />
        </FormItem>
      )}
    />
  );
}

export default function AuthSignUpForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
  });

  const [sendEmail, emailSent, isEmailSendingInProgress] = usePromise(
    false,
    async (inputs) =>
      (
        await axios.post("/api/auth/signup/email", null, {
          params: inputs,
        })
      )?.status === 204,
    (error) => {
      if (error.response.data.field) {
        form.setError(error.response.data.field, {
          type: "server",
          message: error.response.data.message,
        });
      }
    },
  );

  /** @param {z.infer<typeof formSchema>} inputs */
  function onSubmit(inputs) {
    if (emailSent || isEmailSendingInProgress) {
      toast.warn("이메일이 이미 전송되었거나 전송 중입니다.");
      return;
    }

    toast.promise(sendEmail(inputs), {
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
    <>
      <Form {...form} className="mb-10">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          aria-label="auth-input-form"
          className="flex w-full h-fit mb-10"
          noValidate
        >
          <div
            aria-label="auth-input-fields"
            className="relative flex flex-col flex-1 [&_label]:first:*:rounded-ss-lg [&_label]:last:*:rounded-es-lg"
          >
            <InputFormField
              name="username"
              control={form.control}
              type="text"
              autoComplete="username"
              autoCorrect="off"
              placeholder="아이디"
            >
              <TablerUserFilled className="w-6 h-8 opacity-70" />
            </InputFormField>
            <InputFormField
              name="password"
              control={form.control}
              type="password"
              autoComplete="password"
              autoCorrect="off"
              placeholder="비밀번호"
            >
              <TablerCircleKeyFilled className="w-6 h-8 opacity-70" />
            </InputFormField>
            <InputFormField
              name="confirmPassword"
              control={form.control}
              type="password"
              autoComplete="confirmPassword"
              autoCorrect="off"
              placeholder="비밀번호 확인"
            >
              <TablerCircleKeyFilled className="w-6 h-8 opacity-70" />
            </InputFormField>
            <InputFormField
              name="email"
              control={form.control}
              type="email"
              autoComplete="email"
              autoCorrect="off"
              placeholder="이메일"
            >
              <TablerMailFilled className="w-6 h-8 opacity-70" />
            </InputFormField>
          </div>
          <Button
            type="submit"
            className="w-16 h-full bg-primary rounded-e-md rounded-s-none"
          >
            <p className="text-base text-white text-nowrap font-bold drop-shadow-sm">
              회원가입
            </p>
          </Button>
        </form>
      </Form>
    </>
  );
}
