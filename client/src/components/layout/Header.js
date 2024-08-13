import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useToggle } from "@reactuses/core";
import { toast } from "react-toastify";

import "./Header.css";
import { signoutAction, useDispatch, useSelector } from "stores";
import { AuthModal } from "components/layout/auth";
import { useToggleElement } from "hooks";

function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const [submenuRef, showSubmenu, toggleSubmenu] = useToggleElement(false);
  const [showAuthForm, toggleAuthForm] = useToggle(false);

  useEffect(() => {
    toggleSubmenu(false);
    toggleAuthForm(false);
  }, [location, user, toggleSubmenu, toggleAuthForm]);

  function signout() {
    dispatch(signoutAction());
    toast.success("로그아웃 되었습니다");
  }

  return (
    <div className="Header">
      <AuthModal visible={showAuthForm} setVisible={toggleAuthForm} />
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

          <div className="toptopcart">
            <img id="img" src="/images/cart.png" alt="cart" />
          </div>
          <div
            className="toptopprofile"
            onClick={() => (user ? toggleSubmenu(true) : toggleAuthForm(true))}
          >
            <img id="img" src="/images/profile.png" alt="profile" />
          </div>
        </div>
      </div>

      <div
        id="submenu"
        ref={submenuRef}
        className={showSubmenu ? "" : "!hidden"}
      >
        <div className="sm">마이페이지</div>
        <div className="sm">찜레시피</div>
        <div className="sm">뭘로하지</div>
        <div className="sm">
          <Link to="/inquiryList">고객문의</Link>
        </div>
        <div className="sm" onClick={signout}>
          로그아웃
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
          <Link to="/store">스토어</Link>
        </div>
        <div className="topMenu">
          <Link to="/notice">공지사항</Link>
        </div>
        <div className="topMenu">
          <Link to="/events">이벤트</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
