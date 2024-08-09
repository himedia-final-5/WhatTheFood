import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../stores/userSlice";
import { useLocation } from "react-router-dom";
import cn from "../utils/cn";
import Modal from "./util/Modal";
import UndrawEatingTogether from "./vector/UndrawEatingTogether";
import X from "./vector/X";

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

  function logout() {
    dispatch(logoutAction());
    alert("로그아웃 되었습니다");
    navigate("/login");
  }
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="Header">
      <Modal visible={showAuthModal} onOverlayClick={setShowAuthModal}>
        <div
          className={cn(
            "flex w-full h-full m-auto",
            "bg-white rounded-sm shadow-md shadow-neutral-400",
            "md:w-[640px] md:h-[520px] md:flex-col-reverse"
          )}
        >
          <X
            className={cn(
              "fixed cursor-pointer",
              "top-0 right-0 m-2 p-2 h-12",
              "md:hidden",
              "text-2xl text-neutral-500"
            )}
            onClick={() => setShowAuthModal(false)}
          />
          <UndrawEatingTogether width="12rem" />
          <div className="login">로그인/회원가입</div>
        </div>
      </Modal>
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
            <input type="text" placeholder="레시피 검색" />
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
                setShowAuthModal(true);
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
