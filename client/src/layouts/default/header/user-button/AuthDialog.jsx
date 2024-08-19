import { useState } from "react";

import { toast } from "react-toastify";
import { useMediaQuery, useToggle } from "@reactuses/core";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/shadcn/ui/dialog";
import {
  Drawer,
  //DrawerClose,
  DrawerContent,
  DrawerDescription,
  //DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "components/shadcn/ui/drawer";
import { Button } from "components/shadcn/ui/button";

import AuthSignInForm from "components/features/auth/AuthSignInForm";
import AuthSignUpForm from "components/features/auth/AuthSignUpForm";
import {
  UndrawEatingTogether,
  LogoKakao,
  LogoGoogle,
  LogoNaver,
} from "components/asset";
import cn from "utils/cn";

export default function AuthModal() {
  const [open, setOpen] = useState(false);
  const [isSignIn, toggleSignIn] = useToggle(true);
  const modeText = isSignIn ? "로그인" : "회원가입";
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Trigger />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <PartOfTitle modeText={modeText} />
            </DialogTitle>
            <DialogDescription>
              <PartOfDescription modeText={modeText} />
            </DialogDescription>
          </DialogHeader>
          <PartOfContent
            setOpen={setOpen}
            isSignIn={isSignIn}
            toggleSignIn={toggleSignIn}
            modeText={modeText}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Trigger />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>
            <PartOfTitle modeText={modeText} />
          </DrawerTitle>
          <DrawerDescription>
            <PartOfDescription modeText={modeText} />
          </DrawerDescription>
        </DrawerHeader>
        <PartOfContent
          isDrawer
          setOpen={setOpen}
          isSignIn={isSignIn}
          toggleSignIn={toggleSignIn}
          modeText={modeText}
        />
        {/*
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">닫기</Button>
          </DrawerClose>
        </DrawerFooter>
        */}
      </DrawerContent>
    </Drawer>
  );
}

function Trigger({ className }) {
  return (
    <div className="block px-3 py-1.5  bg-primary rounded-lg">
      <p className="text-base text-white text-nowrap font-bold drop-shadow-sm">
        로그인
      </p>
    </div>
  );
}

function PartOfTitle({ modeText }) {
  return (
    <>
      <div className="text-2xl">{modeText}</div>
    </>
  );
}

function PartOfDescription({ modeText }) {
  return <>{modeText} 후 더 많은 서비스를 사용해보세요!</>;
}

/**
 *
 * @param {{isDrawer: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, isSignIn: boolean, toggleSignIn: () => void, modeText: string}} param0
 * @returns
 */
function PartOfContent({
  isDrawer,
  setOpen,
  isSignIn,
  toggleSignIn,
  modeText,
}) {
  async function onSocialLogin(provider) {
    window.open(
      `http://wtfood.today:3000/api/oauth2/authorization/${provider}?redirect_uri=${encodeURIComponent(window.location.href)}`,
      "소셜 로그인",
      "width=500,height=800",
    );
  }

  return (
    <div
      className={cn(
        { "px-4": isDrawer },
        "flex flex-col justify-between h-full",
      )}
    >
      <div
        aria-label="auth-modal-main"
        className="flex flex-col gap-4 items-center w-full flex-1 mt-8"
      >
        {isSignIn ? (
          <AuthSignInForm setVisible={setOpen} />
        ) : (
          <AuthSignUpForm />
        )}
        <div
          aria-label="auth-social"
          className={cn({ "my-8": isDrawer }, "flex flex-col w-full")}
        >
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
              <Button
                className="flex items-center justify-center px-4 py-1 h-10 border border-gray-300 "
                style={{ backgroundColor }}
                key={provider}
                onClick={() => onSocialLogin(provider)}
              >
                <Logo className="h-full" alt={`${name} 로그인`} />
              </Button>
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
  );
}
