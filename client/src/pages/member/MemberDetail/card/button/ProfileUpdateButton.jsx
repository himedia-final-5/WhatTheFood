import { useState } from "react";
import { toast } from "react-toastify";
import {
  IconReload,
  IconLibraryPhoto as IconImageInPicture,
} from "@tabler/icons-react";
import { GearIcon } from "@radix-ui/react-icons";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "components/shadcn/ui/dialog";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "components/shadcn/ui/drawer";
import {
  ImageUploadProvider,
  ImageUploadInput,
  ImageUploadLabel,
  ImageUploadPreview,
  ImageUploadProgressBar,
  ImageUploadFallback,
} from "components/util/ImageUpload";

import cn from "utils/cn";
import axios from "utils/jwtUtil";
import { useDispatch, updateProfile } from "stores";
import { useInput, useMediaQuery } from "hooks";
import { useProfileDetail, useProfileFetch } from "stores/context";

export default function ProfileUpdateButton() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Trigger open={open} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <PartOfTitle />
            </DialogTitle>
            <DialogDescription>
              <PartOfDescription />
            </DialogDescription>
          </DialogHeader>
          <PartOfContent setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Trigger open={open} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>
            <PartOfTitle />
          </DrawerTitle>
          <DrawerDescription>
            <PartOfDescription />
          </DrawerDescription>
        </DrawerHeader>
        <PartOfContent setOpen={setOpen} />
      </DrawerContent>
    </Drawer>
  );
}

function Trigger({ open }) {
  return (
    <div className="p-1 bg-neutral-700 rounded-full">
      <GearIcon
        className={cn(
          "w-5 h-5 text-neutral-400 transition-transform duration-500 ease-in-out",
          "hover:rotate-45 hover:scale-110",
          open ? "rotate-90 scale-125" : "",
        )}
      />
    </div>
  );
}

function PartOfTitle() {
  return <div className="text-2xl">프로필 수정</div>;
}

function PartOfDescription() {
  return <span className="block w-full h-0.5 bg-border" />;
}

/**
 * 이미지 변경 버튼
 *
 * @param {{srText: string} & React.ButtonHTMLAttributes} props
 */
function ImageButton({ srText = "button", children, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        "flex justify-around items-center gap-2 px-2 py-1 rounded-lg",
        "text-neutral-500 bg-neutral-200 group",
        props.className,
      )}
    >
      <div className="sr-only">{srText}</div>
      {children}
    </button>
  );
}

/**
 *
 * @param {{setOpen: React.Dispatch<React.SetStateAction<boolean>>}}
 */
function PartOfContent({ setOpen }) {
  const profile = useProfileDetail();
  const fetchProfile = useProfileFetch();

  const dispatch = useDispatch();
  const [profileImage, setProfileImageState] = useState(profile.profileImage);
  const [bannerImage, setBannerImageState] = useState(profile.bannerImage);
  const [profileLoading, setProfileLoading] = useState(true);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [nickname, onNicknameInputChange] = useInput(profile.nickname);
  const [introduce, onIntroduceInputChange] = useInput(profile.introduce);

  const isDirty =
    profileImage !== profile.profileImage ||
    bannerImage !== profile.bannerImage ||
    nickname !== profile.nickname ||
    introduce !== profile.introduce;

  function setProfileImage(image) {
    setProfileLoading(true);
    setProfileImageState(image);
  }

  function setBannerImage(image) {
    setBannerLoading(true);
    setBannerImageState(image);
  }

  function onSubmit() {
    const inputs = {
      profileImage,
      bannerImage,
      nickname,
      introduce,
    };

    toast.promise(axios.post(`/api/members/${profile.id}/profile`, inputs), {
      pending: "프로필 업데이트 중입니다",
      success: {
        render() {
          dispatch(updateProfile(inputs));
          setOpen(false);
          fetchProfile();
          return "프로필 업데이트에 성공했습니다";
        },
      },
      error: {
        render({ data: error }) {
          return error?.toastMessage || "프로필 업데이트에 실패했습니다.";
        },
      },
    });
  }

  return (
    <div
      aria-label="profile-update-main"
      className="flex flex-col gap-4 items-center w-full flex-1 max-md:px-4 py-4"
    >
      <div aria-label="profile-image" className="flex flex-col w-full">
        <div className="w-full text-base text-neutral-500">프로필 사진</div>
        <ImageUploadProvider
          id="profile"
          image={profileImage}
          setImage={setProfileImage}
          className="flex w-full gap-4"
        >
          <ImageUploadInput accept="image/png, image/jpeg" />
          <div
            aria-label="profile-image-view"
            className="w-24 h-24 my-2 rounded-full ring ring-neutral-500 ring-opacity-50"
          >
            <ImageUploadLabel className="[&_*]:w-full [&_*]:h-full [&_*]:rounded-full">
              <ImageUploadPreview
                alt="profile"
                className={cn(
                  "w-full h-full object-cover",
                  "transition-[filter] duration-500",
                  { "blur-sm": profileLoading },
                )}
                onLoad={() => setProfileLoading(false)}
                onError={() => setProfileLoading(false)}
              />
              <ImageUploadFallback className="w-full h-full bg-primary" />
            </ImageUploadLabel>
            <ImageUploadProgressBar className="w-full h-full -rotate-90" />
          </div>
          <div
            aria-label="profile-image-buttons"
            className="flex flex-col justify-center items-center gap-4"
          >
            <ImageUploadLabel>
              <ImageButton srText="사진 변경" className="pointer-events-none">
                <IconImageInPicture className="w-6 h-6" />
              </ImageButton>
            </ImageUploadLabel>
            <ImageButton
              srText="랜덤 설정"
              disabled={profileLoading}
              onClick={() =>
                setProfileImage(
                  `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${(Math.random() * 10000) | 0}`,
                )
              }
              className="disabled:opacity-50"
            >
              <IconReload className="w-6 h-6" />
            </ImageButton>
          </div>
        </ImageUploadProvider>
      </div>
      <div aria-label="banner-image" className="flex flex-col w-full">
        <div className="w-full text-base text-neutral-500">배너 사진</div>
        <ImageUploadProvider
          id="banner"
          image={bannerImage || "/images/member/default_banner.png"}
          setImage={setBannerImage}
          className="flex w-full gap-4"
        >
          <ImageUploadInput accept="image/png, image/jpeg" />
          <div
            aria-label="banner-image-view"
            className="w-full aspect-[3/1] my-2 rounded-sm ring ring-neutral-500 ring-opacity-50"
          >
            <ImageUploadLabel className="[&_*]:w-full [&_*]:h-full [&_*]:rounded-sm">
              <ImageUploadPreview
                alt="banner"
                className={cn(
                  "w-full aspect-[3/1] object-cover",
                  "transition-[filter] duration-500",
                  { "blur-sm": bannerLoading },
                )}
                onLoad={() => setBannerLoading(false)}
                onError={() => setBannerLoading(false)}
              />
              <ImageUploadFallback className="w-full h-full bg-primary" />
            </ImageUploadLabel>
            <ImageUploadProgressBar className="w-full h-full rounded-sm" />
          </div>
          <div
            aria-label="banner-image-buttons"
            className="flex flex-col justify-center items-center gap-4"
          >
            <ImageUploadLabel>
              <ImageButton srText="사진 변경" className="pointer-events-none">
                <IconImageInPicture className="w-6 h-6" />
              </ImageButton>
            </ImageUploadLabel>
            <ImageButton
              srText="사진 제거"
              disabled={bannerLoading || bannerImage === null}
              onClick={() => setBannerImage(null)}
              className="disabled:opacity-50"
            >
              <IconReload className="w-6 h-6" />
            </ImageButton>
          </div>
        </ImageUploadProvider>
      </div>
      <div aria-label="nickname" className="flex flex-col w-full">
        <div className="w-full text-base text-neutral-500">닉네임</div>
        <input
          type="text"
          onChange={onNicknameInputChange}
          defaultValue={nickname}
          className="w-full p-2 border border-neutral-300 bg-neutral-100 rounded-lg"
        />
      </div>
      <div aria-label="introduce" className="flex flex-col w-full">
        <div className="w-full text-base text-neutral-500">한 줄 소개</div>
        <input
          type="text"
          onChange={onIntroduceInputChange}
          defaultValue={introduce}
          className="w-full p-2 border border-neutral-300 bg-neutral-100 rounded-lg"
        />
      </div>
      <button
        aria-label="submit"
        onClick={onSubmit}
        disabled={!isDirty}
        className="w-full p-2 text-white bg-primary rounded-lg disabled:opacity-50"
      >
        프로필 저장
      </button>
    </div>
  );
}
