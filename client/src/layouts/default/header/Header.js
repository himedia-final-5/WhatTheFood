import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import UserButton from "./user-button/UserButton";
import cn from "utils/cn";

function Header() {
  const headerRef = useRef(null);
  const [headerMargin, setHeaderMargin] = useState(0);
  const prevY = useRef(window.scrollY);

  const handleScroll = () => {
    if (!headerRef.current) return;

    const y = window.scrollY;
    const diffY = prevY.current - y;
    if (diffY > 0) {
      setHeaderMargin((prev) => Math.max(prev - diffY, 0));
    } else {
      setHeaderMargin((prev) =>
        Math.min(prev - diffY, headerRef.current.clientHeight),
      );
    }

    prevY.current = y;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ marginBottom: headerRef.current?.clientHeight }} />
      <header
        ref={headerRef}
        className={cn("fixed flex-col w-full z-40", "bg-neutral-100 shadow-md")}
        style={{
          marginTop: -headerMargin,
        }}
      >
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
      </header>
    </>
  );
}

export default Header;
