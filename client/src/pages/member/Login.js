import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";
import { useSelector, useDispatch, loginAction } from "stores";
import { axios } from "utils";

function Login() {
  const [username, setUserid] = useState("");
  const [password, setPwd] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = useSelector((state) => state.user);

  async function onLogin() {
    if (!username) {
      return alert("아이디를 입력하세요.");
    }
    if (!password) {
      return alert("패스워드를 입력하세요.");
    }
    try {
      let result = await axios.post(
        "/api/auth/login",
        { username, password },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
      );
      dispatch(loginAction(result.data));
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("로그인에 실패했습니다");
    }
  }

  return loginUser ? (
    <div className="body">
      <span>이미 로그인 중이십니다 {loginUser.nickname}님</span>
    </div>
  ) : (
    <div className="body">
      <div className="login">로그인/회원가입</div>
      <br />
      <div className="loginInput">
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUserid(e.currentTarget.value);
          }}
          placeholder="아이디"
        />
        &nbsp;&nbsp;
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPwd(e.currentTarget.value);
          }}
          placeholder="비밀번호"
        />
      </div>
      <br></br>
      <div className="loginButton">
        <div
          className="loginButtonChild"
          onClick={() => {
            onLogin();
          }}
        >
          로그인
        </div>
      </div>
      <br></br>
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
