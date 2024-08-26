import { Link2Icon } from "@radix-ui/react-icons";

import StarFollowButton from "./button/StarFollowButton";
import ProfileUpdateButton from "./button/ProfileUpdateButton";
import FollowListButton from "./button/FollowListButton";
import { useSelector } from "stores";
import { useProfileDetail } from "stores/context";
import {
  IconBadgeTm,
  IconBadgeTmFilled,
  IconBrandFlightradar24,
  IconChefHat,
  IconUserStar,
} from "@tabler/icons-react";

const ROLE_ICON = {
  ROLE_USER: "사용자",
  ROLE_CHEF: (
    <IconChefHat className="p-1 bg-neutral-700 text-yellow-400 w-8 h-8 rounded-full" />
  ),
  ROLE_BRAND: (
    <IconBrandFlightradar24 className="p-1 bg-neutral-700 text-green-400 w-8 h-8 rounded-full" />
  ),
  ROLE_ADMIN: (
    <IconUserStar className="p-1 bg-neutral-700 text-blue-400 w-8 h-8 rounded-full" />
  ),
};

export default function MemberProfileCard() {
  const profile = useProfileDetail();
  const user = useSelector((state) => state.user);
  const isMe = user?.id === Number(profile?.id) ? user : null;

  return (
    <div className="relative flex flex-col w-full h-hit lg:border-2 rounded-sm lg:shadow-md">
      <div className="absolute top-2 right-2 ">
        {isMe ? (
          <ProfileUpdateButton />
        ) : (
          <StarFollowButton key={profile.id} {...profile} />
        )}
      </div>
      <div className="absolute top-2 left-2 ">
        {ROLE_ICON[profile?.role] || <></>}
      </div>
      <img
        src={profile?.bannerImage || "/images/member/default_banner.png"}
        alt="background-banner"
        className="absolute w-full lg:max-h-32 object-cover -z-10"
      />
      <div className="flex lg:flex-col lg:pt-16 justify-start items-center">
        <img
          src={profile?.profileImage || "/images/member/default_profile.png"}
          alt="profile"
          className="w-16 h-16 lg:w-24 lg:h-24 mt-2 ml-2 rounded-full object-cover"
        />
        <div className="flex flex-col text-white lg:text-black text-lg ml-2">
          <div className="flex flex-col text-white lg:text-black text-lg my-2 ml-2">
            {profile?.nickname}
          </div>
          <div className="flex flex-wrap text-neutral-300 lg:text-neutral-700 text-sm ml-2 [&_span]:mx-1 [&_span]:text-primary [&_span]:lg:text-green-600">
            <FollowListButton />
            <div className="mx-1">|</div>
            <div className="text-neutral-300 lg:text-neutral-700">
              누적조회수
              <span>{profile?.totalViewCount || 0}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-neutral-300 lg:text-neutral-700 text-base my-2 max-lg:ml-6 justify-center items-start lg:items-center">
        <span className="hidden lg:block w-full h-0.5 bg-border my-1" />
        <div>{profile?.introduce || "안녕하세요"}</div>
      </div>
      <div className="flex justify-end items-center gap-2 mb-2 mr-2">
        {profile?.socialUrls?.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="p-1 bg-neutral-600 rounded-full"
          >
            <Link2Icon className="w-5 h-5 text-neutral-300 lg:text-neutral-700" />
          </a>
        ))}
      </div>
    </div>
  );
}
