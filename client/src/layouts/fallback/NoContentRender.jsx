import { UndrawDonutLove } from "components/asset";
import cn from "utils/cn";

export default function NoContentRender({ message, ...props }) {
  return (
    <div
      {...props}
      aria-label="no-content-alert"
      className={cn(
        "flex flex-col items-center justify-center w-full h-full mx-10 gap-4 py-4",
        props.className,
      )}
    >
      <h1 className="text-2xl font-bold">
        {message || "아무 내용이 없습니다"}
      </h1>
      <UndrawDonutLove className="w-full mb-10 xs:mb-0 xs:w-2/3 max-w-screen-xs text-primary" />
    </div>
  );
}
