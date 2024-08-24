import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Link2Icon, GearIcon, StarFilledIcon } from "@radix-ui/react-icons";

import ProfileUpdateDialog from "./ProfileUpdateDialog";
import FollowListDialog from "./FollowListDialog";
import { useSelector } from "stores";
import { axios, cn, defaultErrorHandler } from "utils";
import useThrottle from "hooks/useThrottle";
import { LoadingRender, NotFoundRender } from "layouts/fallback";
import { usePromise } from "hooks";

export default function MemberDetail() {
  /** @type {[MemberProfileDetail, React.Dispatch<React.SetStateAction<MemberProfileDetail>>]} */
  const [isUpdateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [isFollowDialogOpen, setFollowDialogOpen] = useState(null);
  const [fetchProfile, member, isLoading, error] = usePromise(
    null,
    useCallback(
      /** @type {() => Promise<MemberProfileDetail} */
      async (id) => (await axios.get(`/api/members/${id}/profile`)).data,
      [],
    ),
  );
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const isMe = user?.id === Number(id) ? user : null;

  const toggleFollow = useThrottle(async () => {
    if (!member || !user) return;

    if (member.id === user.id) {
      toast.error("자기 자신을 팔로우할 수 없습니다");
      return;
    }

    try {
      if (member.following) {
        await axios.delete(`/api/members/${member.id}/follow`);
        toast.success("팔로우를 취소했습니다");
      } else {
        await axios.post(`/api/members/${member.id}/follow`);
        toast.success("팔로우했습니다");
      }

      fetchProfile(id);
    } catch (error) {
      defaultErrorHandler(error);
    }
  }, 3000);

  useEffect(() => {
    fetchProfile(id);
  }, [fetchProfile, id]);

  return isLoading ? (
    <LoadingRender message="회원 정보를 불러오는 중입니다" />
  ) : member === null || error ? (
    <NotFoundRender message="회원 정보를 찾을 수 없습니다" />
  ) : (
    <div className="flex flex-col w-full h-hit mt-[-86px]">
      <ProfileUpdateDialog
        open={isUpdateDialogOpen}
        member={member}
        setOpen={(val) => val || setUpdateDialogOpen(false)}
      />
      <FollowListDialog
        open={isFollowDialogOpen !== null}
        member={member}
        isFollower={isFollowDialogOpen}
        setOpen={(val) => val || setFollowDialogOpen(null)}
      />
      <div className="relative flex flex-col w-full h-hit">
        {user?.id &&
          (isMe ? (
            <button
              className="absolute top-2 right-2 p-1 bg-neutral-700 rounded-full"
              onClick={setUpdateDialogOpen.bind(null, true)}
            >
              <GearIcon
                className={cn(
                  "w-5 h-5 text-neutral-400 transition-transform duration-500 ease-in-out",
                  "hover:rotate-45 hover:scale-125",
                  isUpdateDialogOpen ? "rotate-45 scale-125" : "",
                )}
              />
            </button>
          ) : (
            <button
              className="absolute top-2 right-2 flex gap-2 p-1 bg-neutral-700 rounded-full"
              onClick={toggleFollow}
            >
              <StarFilledIcon
                className={cn("w-5 h-5 text-neutral-400", {
                  "text-yellow-400": member?.following,
                })}
              />
            </button>
          ))}
        <img
          src={member?.bannerImage || "/images/member/default_banner.png"}
          alt="background-banner"
          className="absolute w-full h-full object-cover -z-10"
        />
        <div className="flex justify-start items-center">
          <img
            src={member?.profileImage || "/images/member/default_profile.png"}
            alt="profile"
            className="w-16 h-16 mt-2 ml-2 rounded-full object-cover"
          />
          <div className="flex flex-col text-white text-lg ml-2">
            <div className="flex flex-col text-white text-lg ml-2">
              {member?.nickname}
            </div>
            <div className="flex flex-wrap text-neutral-300 text-sm ml-2 [&_span]:mx-1 [&_span]:text-primary">
              <button
                className="text-neutral-300"
                onClick={setFollowDialogOpen.bind(null, true)}
              >
                팔로워 <span>{member?.followerCount || 0}</span>
              </button>
              <div className="mx-1">|</div>
              <button
                className="text-neutral-300"
                onClick={setFollowDialogOpen.bind(null, false)}
              >
                팔로잉
                <span>{member?.followingCount || 0}</span>
              </button>
              <div className="mx-1">|</div>
              <button className="text-neutral-300">
                누적조회수
                <span>{member?.totalViewCount || 0}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-neutral-300 text-base my-2 ml-6 justify-center items-start">
          <div>{member?.introduce || "안녕하세요"}</div>
        </div>
        <div className="flex justify-end items-center gap-2 mb-2 mr-2">
          {member?.socialUrls?.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="p-1 bg-neutral-600 rounded-full"
            >
              <Link2Icon className="w-5 h-5 text-neutral-300" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full h-hit">
        {/** TODO: 레시피 및 댓글 등 탭 추가 */}
      </div>
    </div>
  );
}
