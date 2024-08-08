import React, { useState, useEffect } from "react";
import "./Header.css";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../stores/userSlice";

// import { useSelector, useDispatch } from 'react-redux';
// import { loginAction, logoutAction } from '../Store/userSlice';

// import { setCookie, getCookie, removeCookie } from '../Util/cookieUtil';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.user);

  return (
    <div className="Header">
      <div className="top">
        <div
          className="toptoplogo"
          onClick={() => {
            navigate("/");
          }}
        >
          오늘 뭐 먹지?
        </div>
        <div className="toptopsearch">
          <input
            type="text"
            placeholder="레시피 검색"
            style={{ fontSize: "30px" }}
          />
          &nbsp;
          <img id="img" src="/images/search.png" />
        </div>
        <div className="toptop">
          <div className="toptopcart">
            <img id="img" src="/images/cart.png" />
          </div>
          <div
            className="toptopprofile"
            onClick={() => {
              if (loginUser) {
                dispatch(logoutAction());
                alert("로그아웃 되었습니다");
              } else {
                navigate("/login");
              }
            }}
          >
            <img id="img" src="/images/profile.png" />
          </div>
        </div>
      </div>

      <div className="submenu">
        <div>마이페이지</div>
        <div>찜레시피</div>
        <div>장바구니</div>
        <div>문의하기</div>
        <div>로그아웃</div>
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
