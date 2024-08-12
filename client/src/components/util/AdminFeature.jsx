import { useSelector } from "stores";

/**
 * @typedef {object} Props
 * @property {React.ReactNode} children 자식 노드
 * @property {React.ReactNode} alternative 대체 노드 (기본: 빈 노드)
 */
/**
 * @type {(props: Props) => React.JSX.Element}
 */
export default function AdminFeature({ children, alternative = <></> }) {
  const user = useSelector((state) => state.user);

  // 관리자가 아닌 경우 대체 노드를 반환
  return user?.role === "ROLE_ADMIN" ? children : alternative;
}
