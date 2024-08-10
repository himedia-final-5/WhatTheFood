import { UndrawEatingTogether } from "components/asset";

import { useSelector } from "stores";

export default function Main() {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      {user ? (
        <div className="flex flex-col items-center">
          <div className="text-lg">
            <span className="font-bold">{user.nickname}</span>님 환영합니다!
          </div>
          <div className="text-neutral-600 text-base">
            당신의 권한은 <span className="font-bold">{user.role}</span>입니다.
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="text-lg">
            <span className="font-bold">게스트</span>님 환영합니다!
          </div>
          <div className="text-neutral-600 text-base">
            로그인을 하시면 더 많은 서비스를 이용하실 수 있습니다.
          </div>
        </div>
      )}
      <UndrawEatingTogether className="max-w-full max-h-full h-56 md:h-72" />
    </div>
  );
}
