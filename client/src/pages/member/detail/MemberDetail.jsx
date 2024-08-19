import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link2Icon, ImageIcon, PlusIcon } from "@radix-ui/react-icons";

import axios from "utils/jwtUtil";
import { useSelector } from "stores";

export default function MemberDetail() {
  /** @type {[MemberDetail, React.Dispatch<React.SetStateAction<MemberDetail>>]} */
  const [member, setMember] = useState(null);
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const isMe = user?.id === Number(id);

  useEffect(() => {
    axios.get(`/api/members/${id}`).then((response) => {
      setMember(response.data);
    });
  }, [id]);

  function openEditProfilePopup() {
    // TODO: 프로필 수정 팝업 열기
    console.log("openEditProfilePopup");
  }

  function openEditSocialPopup() {
    // TODO: 소셜 수정 팝업 열기
    console.log("openEditSocialPopup");
  }

  return (
    <div className="flex flex-col w-full h-hit">
      <div className="relative flex flex-col w-full h-hit">
        <img
          src={member?.bannerImage || "/images/member/default_banner.png"}
          alt="background-banner"
          className="absolute w-full h-full object-cover -z-10"
        />
        {isMe && (
          <button
            className="absolute bottom-2 right-2 p-2 bg-neutral-400 rounded-full"
            onClick={openEditProfilePopup}
          >
            <ImageIcon className="w-full h-full text-black" />
          </button>
        )}
        <div className="flex justify-start items-center">
          <div className="relative w-20 h-20 mt-2 ml-2 ">
            <img
              src={member?.profileImage || "/images/member/default_profile.png"}
              alt="profile"
              className="w-full h-full rounded-full object-cover"
            />
            {isMe && (
              <button
                className="absolute bottom-0 right-0 p-1 bg-neutral-400 rounded-full"
                onClick={openEditProfilePopup}
              >
                <ImageIcon className="w-full h-full text-black" />
              </button>
            )}
          </div>
          <div className="flex flex-col text-white text-lg ml-2">
            <div className="flex flex-col text-white text-lg ml-2">
              {member?.nickname}
            </div>
            <div className="flex text-neutral-300 text-base ml-2 [&>span]:mx-1 [&>span]:text-primary">
              팔로워 <span>{member?.followerCount || 0}</span>| 팔로잉
              <span>{member?.followingCount || 0}</span>| 누적조회수
              <span>{member?.totalViewCount || 0}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-neutral-300 text-base my-2 ml-6 justify-center items-start">
          {isMe ? (
            <button onClick={openEditProfilePopup}>
              {member?.introduce || "안녕하세요"}
            </button>
          ) : (
            <div>{member?.introduce || "안녕하세요"}</div>
          )}
        </div>
        <div className="flex justify-start items-center mb-3 ml-4 gap-2">
          {member?.socialUrls?.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="p-1 bg-neutral-500 rounded-full"
            >
              <Link2Icon className="w-6 h-6 text-white" />
            </a>
          ))}
          {isMe && (
            <button
              className="p-1 bg-neutral-300 rounded-full"
              onClick={openEditSocialPopup}
            >
              <PlusIcon className="w-6 h-6 text-neutral-500" />
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full h-hit">
        {/** TODO: 레시피 및 댓글 등 탭 추가 */}
      </div>
    </div>
  );
}
