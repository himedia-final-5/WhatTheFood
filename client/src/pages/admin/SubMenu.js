import { Link } from "react-router-dom";

function SubMenu() {
  return (
    <div className="adminmenu">
      <Link to="/memberList">회원 목록</Link>
      <Link to="/rList">레시피 목록</Link>
      <Link to="/iList">문의사항</Link>
      <Link to="/noticeList">공지사항</Link>
      <Link to="/faqList">FAQ</Link>
      <Link to="/eList">이벤트</Link>
      {/* <Link to="/brandList">브랜드</Link> */}
    </div>
  );
}

export default SubMenu;
