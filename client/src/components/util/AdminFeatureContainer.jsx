import { toast } from "react-toastify";
import { useFirstMountState } from "@reactuses/core";

import { UndrawChef } from "components/asset";
import { useSelector } from "stores";

/**
 * @typedef {object} Props
 * @property {boolean} notify 관리자만 접근 가능하다는 토스트를 띄울지 여부 (기본: true)
 * @property {React.HTMLAttributes<HTMLDivElement>} props 컨테이너 속성
 * @property {React.ReactNode} children 자식 노드
 */
/**
 * @type {(props: Props) => React.JSX.Element}
 */
export default function AdminFeatureContainer({
  children,
  notify = true,
  ...props
}) {
  const isFirstMount = useFirstMountState();
  const user = useSelector((state) => state.user);

  if (user?.role !== "ROLE_ADMIN") {
    if (notify && isFirstMount) {
      toast.error("관리자만 접근 가능합니다.");
    }

    return (
      <div {...props}>
        <div className="flex flex-col items-center justify-between w-full">
          <h1 className="text-4xl font-bold">관리자만 접근 가능합니다.</h1>
          <UndrawChef className="w-64 h-64" />
        </div>
      </div>
    );
  }

  return <div {...props}>{children}</div>;
}
