import { useSelector } from "stores";

/**
 * @typedef {object} Props
 * @property {React.ReactNode} children 자식 노드
 * @property {React.ReactNode} alternative 대체 노드 (기본: 빈 노드)
 * @property {number} expectId 예상 아이디 (기본: null), 예상 아이디와 현재 아이디가 일치하지 않으면 대체 노드를 반환
 */
/**
 * @type {(props: Props) => React.JSX.Element}
 */
export default function UserFeature({
  children,
  alternative = <></>,
  expectId = null,
}) {
  const user = useSelector((state) => state.user);

  // 회원이 아니거나 예상 아이디와 현재 아이디가 일치하지 않으면 대체 노드를 반환
  return user && (!expectId || user.id === expectId) ? children : alternative;
}
