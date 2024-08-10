import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  return (
    <div className="body">
      <div className="searching">
        <Link to="/joinForm">회원가입</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>아이디 찾기</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>비밀번호 찾기</div>
      </div>
      <div className="otherlogin">
        <div className="google">
          <img src="/images/google.png" alt="google-oauth" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>Google 계정으로 로그인</div>
        </div>
        <br />
        <div className="kakao">
          <img src="/images/kakao.png" alt="kakao-oauth" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>카카오 계정으로 로그인</div>
        </div>
        <br />
        <div className="naver">
          <img src="/images/naver.png" alt="naver-oauth" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>naver 계정으로 로그인</div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Login;
