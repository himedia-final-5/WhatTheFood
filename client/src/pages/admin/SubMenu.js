import { Link } from "react-router-dom";

function SubMenu() {
  return (
    <div className="adminmenu">
      <Link to="/memberList">멤버</Link>
      <Link to="/noticeList">공지사항</Link>
      <Link to="/iList">문의사항</Link>
      <Link to="/faqList">FAQ</Link>
      <Link to="/lingList">이벤트</Link>
    </div>
  );
}

export default SubMenu;
