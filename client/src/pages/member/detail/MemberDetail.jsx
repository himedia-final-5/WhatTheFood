import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link2Icon, GearIcon } from "@radix-ui/react-icons";

import axios from "utils/jwtUtil";
import cn from "utils/cn";
import { useSelector } from "stores";

export default function MemberDetail() {
  /** @type {[MemberDetail, React.Dispatch<React.SetStateAction<MemberDetail>>]} */
  const [member, setMember] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const isMe = user?.id === Number(id) ? user : null;

  useEffect(() => {
    axios.get(`/api/members/${id}`).then((response) => {
      setMember(response.data);
    });
  }, [id, isMe]);

  return (
    <div className="flex flex-col w-full h-hit mt-[-86px]">
      <div className="relative flex flex-col w-full h-hit">
        <img
          src={member?.bannerImage || "/images/member/default_banner.png"}
          alt="background-banner"
          className="absolute w-full h-full object-cover -z-10"
        />
        {isMe && (
          <button
            className="absolute top-2 right-2 p-1 bg-neutral-700 rounded-full"
            onClick={setDialogOpen.bind(null, true)}
          >
            <GearIcon
              className={cn(
                "w-5 h-5 text-neutral-400 transition-transform duration-500 ease-in-out",
                "hover:rotate-45 hover:scale-125",
                dialogOpen ? "rotate-45 scale-125" : "",
              )}
            />
          </button>
        )}
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
              <button className="text-neutral-300">
                팔로워 <span>{member?.followerCount || 0}</span>
              </button>
              <div className="mx-1">|</div>
              <button className="text-neutral-300">
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
