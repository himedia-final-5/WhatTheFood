import { Link } from "react-router-dom";

import "./Header.css";
import UserButton from "./user-button/UserButton";

function Header() {
  return (
    <div className="Header">
      <div className="top">
        <div className="toptoplogo">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="toptop">
          <div className="toptopsearch">
            <input type="text" placeholder="레시피 검색" />
            &nbsp;
            <img id="img" src="/images/search.png" alt="search" />
          </div>
          <UserButton />
        </div>
      </div>

      <div className="menu">
        <div className="topMenu">
          <Link to="/recipe">레시피</Link>
        </div>
        <div className="topMenu">
          <Link to="/ranking">랭킹</Link>
        </div>
        <div className="topMenu">
          <Link to="/store">매장 찾기</Link>
        </div>
        <div className="topMenu">
          <Link to="/notices">공지사항</Link>
        </div>
        <div className="topMenu">
          <Link to="/events">이벤트</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
