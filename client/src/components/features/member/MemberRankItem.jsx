import { memo } from "react";
import { Link } from "react-router-dom";

import { cn } from "utils";

const MemberRankItem = memo(({ member, rank, isLoading }) => (
  <div
    className={cn(
      "flex flex-col items-center",
      isLoading ? "animate-pulse" : "animate-fade-in",
    )}
  >
    <div className="relative mx-auto size-20">
      <div
        className={cn(
          "absolute -top-2 -left-2 size-8",
          "flex justify-center items-center",
          "bg-white border rounded shadow-md",
          "text-center leading-none",
        )}
      >
        <div className={isLoading ? "text-transparent" : ""}>{rank}</div>
      </div>
      <div className="size-full *:size-full bg-gray-300 rounded-full overflow-hidden">
        {isLoading ? (
          <div className="bg-gray-300" />
        ) : (
          <Link to={`/members/${member.id}`}>
            <img src={member.profileImage} alt="member_profile" />
          </Link>
        )}
      </div>
    </div>
    <div className="flex justify-center py-2 w-32 h-10">
      {isLoading ? (
        <div className="size-full text-center text-wrap text-sm md:text-base leading-none line-clamp-1 font-bold bg-gray-300 rounded"></div>
      ) : (
        <div className="size-full text-center text-wrap text-sm md:text-base leading-none line-clamp-1 font-bold">
          {member.nickname}
        </div>
      )}
    </div>
  </div>
));

export default MemberRankItem;
