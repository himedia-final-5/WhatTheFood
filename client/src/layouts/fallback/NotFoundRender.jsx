import { Link } from "react-router-dom";

import UndrawDonutLove from "components/asset/UndrawDonutLove";

const NOT_FOUND_MESSAGES = [
  "여긴 저도 처음 와봐요!",
  "여긴 어디죠?",
  "여긴 뭐하는 곳인가요?",
  "아무 것도 없는 장소에요!",
  "길을 잘못 고른 것 같아요!",
  "여긴 미지의 영역이에요!",
  "이곳은 아무도 모르는 곳이에요!",
  "여긴 아무도 없는 곳이에요!",
  "여긴 아무도 찾지 못한 곳이에요!",
  "여긴 아무도 모르는 비밀 장소에요!",
];

function hashStringToNumber(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

function getNotFoundMessage(url) {
  const index = hashStringToNumber(url) % NOT_FOUND_MESSAGES.length;
  return NOT_FOUND_MESSAGES[index];
}

/** @param {{message: ?string}} */
export default function NotFoundRender({ message }) {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex flex-col justify-center items-center w-60 mx-3 gap-4 transition-transform xs:scale-125">
        <UndrawDonutLove className="object-contain  text-primary" />
        <div className="text-base">
          {message || getNotFoundMessage(window.location.href)}
        </div>
        <Link
          to="/"
          className="w-28 py-1 text-lg text-center bg-primary rounded-lg text-white font-bold"
        >
          홈으로
        </Link>
      </div>
    </div>
  );
}
