import { memo, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@reactuses/core";
import { toast } from "react-toastify";

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

import { usePageResponse, useThrottle } from "hooks";
import PaginationNav from "components/util/PaginationNav";
import { useSelector } from "stores";
import { axios, cn, defaultErrorHandler } from "utils";
import { useMemberDetail } from "./MemberDetail";

/** @param {{  pen: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}} */
export default function FollowListDialog({ open, setOpen, children }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <PartOfTitle />
            </DialogTitle>
            <DialogDescription>
              <PartOfDescription />
            </DialogDescription>
          </DialogHeader>
          <PartOfContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>
            <PartOfTitle />
          </DrawerTitle>
          <DrawerDescription>
            <PartOfDescription />
          </DrawerDescription>
        </DrawerHeader>
        <PartOfContent />
      </DrawerContent>
    </Drawer>
  );
}

function PartOfTitle() {
  const { followDialogMode, setFollowDialogMode } = useMemberDetail();

  return (
    <div className="flex justify-around items-center w-full h-fit md:mt-2 p-1 text-2xl bg-neutral-100 rounded-lg">
      <button
        className={cn(
          "flex-1 rounded-lg transition-colors",
          followDialogMode
            ? "text-neutral-900 bg-white shadow-sm"
            : "text-neutral-500",
        )}
        onClick={() => setFollowDialogMode(true)}
      >
        팔로워
      </button>
      <button
        className={cn(
          "flex-1 rounded-lg transition-colors",
          followDialogMode
            ? " text-neutral-500"
            : "text-neutral-900 bg-white shadow-sm",
        )}
        onClick={() => setFollowDialogMode(false)}
      >
        팔로잉
      </button>
    </div>
  );
}

function PartOfDescription() {
  return <span className="block w-full h-0.5 bg-border" />;
}

function PartOfContent() {
  const [fetched, setFetched] = useState(false);
  const { profile, followDialogMode } = useMemberDetail();
  /** @type {{content: MemberProfileSummary[], pagination: Pagination, setPageResponse: (response: PageResponse<MemberProfileSummary>) => void}} */
  const { content, pagination, setPageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(
          `/api/members/${profile?.id}/${followDialogMode ? "followers" : "followings"}`,
          {
            params: { page, size: 5 },
          },
        )
        .then((result) => setPageResponse(result.data))
        .catch(console.error)
        .finally(() => setFetched(true)),
    [setPageResponse, profile?.id, followDialogMode],
  );

  useEffect(() => {
    if (!fetched) {
      onSelectPage(0);
    }
  }, [onSelectPage, fetched]);

  useEffect(() => {
    setFetched(false);
  }, [followDialogMode]);

  return (
    <div
      aria-label="member-profile-list"
      className="flex flex-col items-center w-full h-[420px] max-md:px-4 py-4"
    >
      <div className="flex flex-col gap-2 items-center w-full flex-1">
        {content.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
      <PaginationNav {...{ pagination, onSelectPage }} />
    </div>
  );
}

const ProfileCard = memo(
  /** @param {{profile: MemberProfileSummary}} */
  ({ profile }) => {
    return (
      <div
        aria-label="profile"
        className="flex justify-around items-center w-full gap-4 shadow-md p-2 border border-neutral-200 rounded-md"
      >
        <Link to={`/members/${profile.id}`}>
          <img
            src={profile.profileImage}
            alt="profile"
            aria-label="profile-image"
            className="w-10 object-cover rounded-full"
          />
        </Link>
        <div
          aria-label="profile-nickname"
          className="flex-1 text-base text-neutral-900"
        >
          {profile.nickname}
        </div>
        <FollowButton profile={profile} />
      </div>
    );
  },
);

const FollowButton = memo(
  /** @param {{profile: MemberProfileSummary}} */
  ({ profile }) => {
    const [member, setMember] = useState(profile);
    const user = useSelector((state) => state.user);

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

        setMember({
          ...member,
          following: !member.following,
        });
      } catch (error) {
        defaultErrorHandler(error);
      }
    }, 3000);

    return (
      user?.id &&
      user.id !== member.id && (
        <button
          className={cn(
            "w-20 px-2 py-1 shadow-md text-sm font-bold border border-neutral-200 rounded-md",
            member.following ? "text-neutral-500" : "text-green-500",
          )}
          onClick={toggleFollow}
        >
          {member.following ? "언팔로우" : "팔로우"}
        </button>
      )
    );
  },
);
