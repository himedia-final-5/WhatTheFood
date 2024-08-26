import { memo, useState } from "react";
import { toast } from "react-toastify";
import { StarFilledIcon } from "@radix-ui/react-icons";

import { useSelector } from "stores";
import { axios, cn, defaultErrorHandler } from "utils";
import { useThrottle } from "hooks";

export default memo(({ id, following: initialFollowing }) => {
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
    <button className="p-1 bg-neutral-700 rounded-full" onClick={toggleFollow}>
      <StarFilledIcon
        className={cn("w-5 h-5 text-neutral-400", {
          "text-yellow-400": following,
        })}
      />
    </button>
  );
});
