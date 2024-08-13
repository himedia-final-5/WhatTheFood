import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./JoinForm.css";

function UpdateForm() {
  const [userid] = useState("");
  const [email] = useState("");

  useEffect(() => {});

  return (
    <div className="body">
      <div className="joinjoin">
        <label>회원정보 수정</label>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div className="memberInfo">
        <div className="Info">
          <label>아이디</label>
          <input value={userid} readOnly />
        </div>
        <br></br>
        <br></br>
        <div className="Info">
          <label>비밀번호</label>
          <input />
        </div>
        <div>비밀번호 메시지</div>

        <br />
        <div className="Info">
          <label>비밀번호 확인</label>
          <input />
        </div>
        <div>비밀번호 확인여부 메시지</div>

        <br></br>
        <br></br>
        <br />
        <div className="Info">
          <label>닉네임</label>
          <input />
        </div>
        <div id="idcheck">닉네임 중복확인</div>
        <div>닉네임 중복확인 여부 메시지</div>

        <br></br>
        <br></br>
        <br />
        <div className="Info">
          <label>이메일</label>
          <input value={email} readOnly />
        </div>
        <br />
        <br></br>
      </div>
      <br></br>
      <div className="join">
        <div id="join">수정완료</div>
        <Link id="back" to="/">
          돌아가기
        </Link>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default UpdateForm;
