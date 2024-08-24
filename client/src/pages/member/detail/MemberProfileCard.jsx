import { memo, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link2Icon, StarFilledIcon } from "@radix-ui/react-icons";

import ProfileUpdateDialog from "./ProfileUpdateDialog";
import FollowListDialog from "./FollowListDialog";
import { useSelector } from "stores";
import { axios, cn, defaultErrorHandler } from "utils";
import { useThrottle } from "hooks";
import { useMemberDetail } from "./MemberDetail";

const StarFollowButton = memo(({ id, following: initialFollowing }) => {
  const [following, setFollowing] = useState(initialFollowing);
  const user = useSelector((state) => state.user);

  const toggleFollow = useThrottle(async () => {
    if (!user) {
      toast.error("로그인이 필요합니다");
      return;
    }

    try {
      if (following) {
        await axios.delete(`/api/members/${id}/follow`);
        toast.success("팔로우를 취소했습니다");
      } else {
        await axios.post(`/api/members/${id}/follow`);
        toast.success("팔로우했습니다");
      }

      setFollowing(!following);
    } catch (error) {
      defaultErrorHandler(error);
    }
  }, 3000);

  return (
    <button
      className="absolute top-2 right-2 flex gap-2 p-1 bg-neutral-700 rounded-full"
      onClick={toggleFollow}
    >
      <StarFilledIcon
        className={cn("w-5 h-5 text-neutral-400", {
          "text-yellow-400": following,
        })}
      />
    </button>
  );
});

export default function MemberProfileCard() {
  const { profile, setFollowDialogMode } = useMemberDetail();
  const [isFollowDialogOpen, setFollowDialogOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const isMe = user?.id === Number(profile?.id) ? user : null;

  useEffect(() => {
    setFollowDialogOpen(false);
  }, [profile.id]);

  return (
    <div className="relative flex flex-col w-full h-hit lg:border-2 rounded-sm lg:shadow-md">
      {isMe ? (
        <ProfileUpdateDialog />
      ) : (
        <StarFollowButton key={profile.id} {...profile} />
      )}
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
            <FollowListDialog
              open={isFollowDialogOpen}
              setOpen={setFollowDialogOpen}
            >
              <>
                <button
                  className="text-neutral-300 lg:text-neutral-700"
                  onClick={() => {
                    setFollowDialogOpen(true);
                    setFollowDialogMode(true);
                  }}
                >
                  팔로워 <span>{profile?.followerCount || 0}</span>
                </button>
                <div className="mx-1">|</div>
                <button
                  className="text-neutral-300 lg:text-neutral-700"
                  onClick={() => {
                    setFollowDialogOpen(true);
                    setFollowDialogMode(false);
                  }}
                >
                  팔로잉
                  <span>{profile?.followingCount || 0}</span>
                </button>
              </>
            </FollowListDialog>
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
