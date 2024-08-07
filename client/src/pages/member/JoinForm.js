import React, { useState, useEffect } from "react";
import "./JoinForm.css";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function JoinForm() {
  const navigate = useNavigate();

  useEffect(() => {});

  return (
    <div>
      <div className="body">
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          오늘 뭐 먹지?
        </div>
        <br></br>
        <br />
        <div className="joinjoin">
          <label>회원가입</label>
        </div>
        <br></br>

        <br></br>
        <br></br>

        <div className="memberInfo">
          <div className="Info">
            <label>아이디</label>
            <input placeholder="아이디" />
          </div>
          <div id="idcheck">ID 중복확인</div>
          <div>{}</div>

          <br></br>
          <br></br>
          <div className="Info">
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호" />
          </div>
          <div>{}</div>

          <br />
          <div className="Info">
            <label>비밀번호 확인</label>
            <input type="password" placeholder="비밀번호 확인" />
          </div>
          <div>{}</div>

          <br></br>
          <br></br>
          <br />
          <div className="Info">
            <label>닉네임</label>
            <input placeholder="닉네임" />
          </div>
          <div id="idcheck">닉네임 중복확인</div>
          <div>{}</div>

          <br></br>
          <br></br>
          <br />
          <div className="Info">
            <label>이메일</label>
            <input placeholder="이메일" />
          </div>

          <br />

          <div className="Info">
            <label>이메일 인증코드</label>
            <input placeholder="인증코드" />
          </div>
          <div>{}</div>

          <br></br>
        </div>
        <br></br>
        <div className="join">
          <div id="join">가입하기</div>
          <div
            id="join"
            onClick={() => {
              navigate("/login");
            }}
          >
            돌아가기
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
      <Footer />
    </div>
  );
}

export default JoinForm;
