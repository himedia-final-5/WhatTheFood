import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.css";
import { logoutAction, useDispatch, useSelector } from "stores";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loginUser = useSelector((state) => state.user);
  const [submenuVisible, setSubmenuVisible] = useState(false);

  console.log("subMenuVisible", submenuVisible);
  useEffect(() => {
    setSubmenuVisible(false);
  }, [location]);

  function logout() {
    dispatch(logoutAction());
    alert("로그아웃 되었습니다");
    navigate("/login");
  }

  return (
    <div className="Header">
      <div className="top">
        <div
          className="toptoplogo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/images/logo.png" alt="logo" />
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
                navigate("/login");
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
        <div className="sm" onClick={() => navigate(`/inquiryList`)}>
          고객문의
        </div>
        <div
          className="sm"
          onClick={() => {
            logout();
          }}
        >
          로그아웃
        </div>
      </div>

      <div className="menu">
        <div
          className="topMenu"
          onClick={() => {
            navigate("/recipe");
          }}
        >
          레시피
        </div>
        <div
          className="topMenu"
          onClick={() => {
            navigate("/ranking");
          }}
        >
          랭킹
        </div>
        <div
          className="topMenu"
          onClick={() => {
            navigate("/store");
          }}
        >
          스토어
        </div>
        <div
          className="topMenu"
          onClick={() => {
            navigate("/notice");
          }}
        >
          공지사항
        </div>
        <div
          className="topMenu"
          onClick={() => {
            navigate("/events");
          }}
        >
          이벤트
        </div>
      </div>
    </div>
  );
}

export default Header;
