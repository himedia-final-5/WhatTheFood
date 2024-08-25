import { forwardRef, memo, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@reactuses/core";

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

import { usePageResponse } from "hooks";
import PaginationNav from "components/util/PaginationNav";
import { axios, cn } from "utils";
import TextFollowButton from "./TextFollowButton";
import {
  useProfileDetail,
  FollowDialogValueContext,
  FollowDialogActionContext,
  useFollowDialogValue,
  useFollowDialogAction,
} from "stores/context";

export default function FollowListButton() {
  const profile = useProfileDetail();
  const [open, setOpen] = useState(false);
  const [followDialogMode, setFollowDialogMode] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setOpen(false);
  }, [profile.id]);

  return (
    <FollowDialogValueContext.Provider value={{ followDialogMode }}>
      <FollowDialogActionContext.Provider value={{ setFollowDialogMode }}>
        {isDesktop ? (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Trigger setOpen={setOpen} />
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
              <PartOfContent />
            </DialogContent>
          </Dialog>
        ) : (
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Trigger setOpen={setOpen} />
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
              <PartOfContent />
            </DrawerContent>
          </Drawer>
        )}
      </FollowDialogActionContext.Provider>
    </FollowDialogValueContext.Provider>
  );
}

const Trigger = forwardRef(({ setOpen }, ref) => {
  const profile = useProfileDetail();
  const { setFollowDialogMode } = useFollowDialogAction();
  return (
    <>
      <button
        className="text-neutral-300 lg:text-neutral-700"
        onClick={() => {
          setOpen(true);
          setFollowDialogMode(true);
        }}
      >
        팔로워 <span>{profile?.followerCount || 0}</span>
      </button>
      <div className="mx-1">|</div>
      <button
        className="text-neutral-300 lg:text-neutral-700"
        onClick={() => {
          setOpen(true);
          setFollowDialogMode(false);
        }}
      >
        팔로잉
        <span>{profile?.followingCount || 0}</span>
      </button>
    </>
  );
});

function PartOfTitle() {
  const { followDialogMode } = useFollowDialogValue();
  const { setFollowDialogMode } = useFollowDialogAction();

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
  const profile = useProfileDetail();
  const { followDialogMode } = useFollowDialogValue();
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
        <TextFollowButton profile={profile} />
      </div>
    );
  },
);
