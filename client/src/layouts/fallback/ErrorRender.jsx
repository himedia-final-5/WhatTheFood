import { Link } from "react-router-dom";

import {
  UndrawBugFixing,
  UndrawDonutLove,
  UndrawServerDown,
  UndrawSpecialEvent,
} from "@components/asset";
import cn from "@utils/cn";

const getErrorImage = (status) => {
  switch (status) {
    case 400:
    case 401:
    case 403:
      return UndrawSpecialEvent;
    case 404:
      return UndrawDonutLove;
    case 504:
      return UndrawServerDown;
    default:
      return UndrawBugFixing;
  }
};

export default function ErrorRender({ error, resetErrorBoundary, ...props }) {
  const ErrorImage = getErrorImage(
    Number(error?.status || error?.response?.status || 500),
  );

  return (
    <div
      {...props}
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center w-full h-full mx-10 gap-4 py-4",
        props.className,
      )}
    >
      <h1 className="text-2xl font-bold">
        {error?.toastMessage || error?.message || "오류가 발생했습니다"}
      </h1>
      <ErrorImage className="w-full mb-10 xs:mb-0 xs:w-2/3 max-w-screen-xs text-primary" />
      <div className="flex gap-4 *:w-28 *:py-1 *:rounded-lg *:text-lg *:font-bold *:text-center *:text-white">
        <Link to="/" className="bg-primary">
          홈으로
        </Link>
        <button onClick={window.location.reload} className="bg-neutral-700">
          새로고침
        </button>
      </div>
    </div>
  );
}
