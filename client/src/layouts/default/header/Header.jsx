import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import SearchButton from "./search-button/SearchButton";
import UserButton from "./user-button/UserButton";
import cn from "@utils/cn";
import LogoYorijoriMain from "@components/asset/LogoYorijoriMain";

const links = [
  ["/recipes", "레시피"],
  ["/chefs", "쉐프"],
  ["/brands", "브랜드"],
  ["/store", "오프라인 매장"],
  ["/events", "이벤트"],
];

function Header() {
  const headerRef = useRef(null);
  const [headerMargin, setHeaderMargin] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);
  const prevY = useRef(window.scrollY);

  const handleScreenUpdate = () => {
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

    setMarginBottom(headerRef.current.clientHeight + 70);
    prevY.current = y;
  };

  useEffect(() => {
    if (headerRef.current) {
      setMarginBottom(headerRef.current.clientHeight + 70);
    }

    window.addEventListener("scroll", handleScreenUpdate);
    window.addEventListener("resize", handleScreenUpdate);

    return () => {
      window.removeEventListener("scroll", handleScreenUpdate);
      window.removeEventListener("resize", handleScreenUpdate);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed flex flex-col w-full z-40 bg-white shadow-md"
        style={{
          marginTop: -headerMargin,
        }}
      >
        <div className="flex justify-around w-full border-b border-gray-300">
          <div
            className={cn(
              "flex gap-8 justify-between items-center w-full max-w-screen-2xl",
              "transition-shape py-2 px-4 md:py-2.5 md:px-8",
            )}
          >
            <Link to="/">
              <LogoYorijoriMain className="w-36" />
            </Link>
            <div className="flex-1 flex justify-end gap-2">
              <SearchButton />
              <UserButton />
            </div>
          </div>
        </div>

        <div className="flex justify-around w-full bg-neutral-50">
          <div className="flex justify-between w-full max-w-screen-lg transition-shape px-2 xs:px-8 sm:gap-16 md:mx-auto md:justify-around">
            {links.map(([link, text]) => (
              <Link
                to={link}
                key={link}
                className="text-base transition-colors hover:drop-shadow-lg hover:font-bold px-1 py-2"
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <div aria-label="header-margin" style={{ marginBottom: marginBottom }} />
    </>
  );
}

export default Header;
