import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, HomeIcon } from "@radix-ui/react-icons";

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
        className={cn(
          "fixed flex flex-col w-full z-40",
          "bg-neutral-100 shadow-md",
        )}
        style={{
          marginTop: -headerMargin,
        }}
      >
        <div
          className={cn(
            "flex gap-8 justify-between items-center bg-white border-b border-gray-300",
            "transition-shape py-2 px-4 md:py-2.5 md:px-8",
          )}
        >
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="h-10 min-w-42 transition-transform hover:scale-110 object-contain"
            />
          </Link>
          <div className="flex-1 flex justify-end gap-2">
            <form
              className={cn(
                "relative flex flex-1 justify-center items-center rounded-full",
                "h-10 w-full max-w-96 px-4 ",
                "border border-solid border-neutral-600 bg-neutral-50",
                "hidden xs:block",
              )}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="레시피 검색"
                className="w-full text-base"
              />
              <button
                type="submit"
                className="absolute right-2 top-0 flex items-center h-full z-20"
              >
                <MagnifyingGlassIcon className="h-8 w-8" />
              </button>
            </form>
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
