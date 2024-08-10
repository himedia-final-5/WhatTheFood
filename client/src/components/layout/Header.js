import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import "./Header.css";
import { logoutAction, useDispatch, useSelector } from "stores";
import { AuthModal } from "components/layout/auth";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loginUser = useSelector((state) => state.user);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [authFormVisible, setAuthFormVisible] = useState(false);

  useEffect(() => {
    setSubmenuVisible(false);
    setAuthFormVisible(false);
  }, [location]);

  function logout() {
    dispatch(logoutAction());
    alert("로그아웃 되었습니다");
    navigate("/login");
  }

  return (
    <div className="Header">
      <AuthModal visible={authFormVisible} setVisible={setAuthFormVisible} />
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
            onClick={() => {
              if (loginUser) {
                setSubmenuVisible(!submenuVisible);
              } else {
                setAuthFormVisible(true);
              }
            }}
          >
            <img id="img" src="/images/profile.png" alt="profile" />
          </div>
        </div>
      </div>

      <div id="submenu" className={submenuVisible ? "" : "!hidden"}>
        <div className="sm">마이페이지</div>
        <div className="sm">찜레시피</div>
        <div className="sm">뭘로하지</div>
        <div className="sm">
          <Link to="/inquiryList">고객문의</Link>
        </div>
        <div className="sm" onClick={logout}>
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
