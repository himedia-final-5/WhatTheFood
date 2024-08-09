import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../stores/userSlice";
import { useLocation } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.user);
  const location = useLocation();
  let a = false;

  useEffect(() => {
    if (a == false) {
      a = true;
      document.getElementById("submenu").style.visibility = "hidden";
    } else {
      a = false;
      document.getElementById("submenu").style.visibility = "visible";
    }
  }, [location]);

  function submenu() {
    if (a == true) {
      a = false;
      document.getElementById("submenu").style.visibility = "hidden";
    } else {
      a = true;
      document.getElementById("submenu").style.visibility = "visible";
    }
  }
  // document.addEventListener("DOMContentLoaded", function () {
  //   var submenuElement = document.getElementById("submenu");
  //   if (submenuElement) {
  //     submenuElement.style.visibility = "hidden";
  //   }
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
          <img src="/images/logo.png" />
        </div>
        <div className="toptop">
          <div className="toptopsearch">
            <input
              type="text"
              placeholder="레시피 검색"
              style={{ fontSize: "30px" }}
            />
            &nbsp;
            <img id="img" src="/images/search.png" />
          </div>

          <div className="toptopcart">
            <img id="img" src="/images/cart.png" />
          </div>
          <div
            className="toptopprofile"
            onClick={() => {
              if (loginUser) {
                submenu();
              } else {
                navigate("/login");
              }
            }}
          >
            <img id="img" src="/images/profile.png" />
          </div>
        </div>
      </div>

      <div id="submenu">
        <div className="sm">마이페이지</div>
        <div className="sm">찜레시피</div>
        <div className="sm">뭘로하지</div>
        <div className="sm" onClick={() => navigate("/inquiryList")}>
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
