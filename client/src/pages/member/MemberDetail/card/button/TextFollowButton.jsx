import { memo, useState } from "react";
import { toast } from "react-toastify";

import { useThrottle } from "hooks";
import { useSelector } from "stores";
import { axios, cn, defaultErrorHandler } from "utils";

export default memo(
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
