import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCookie } from "../../utils/cookieUtil";
import { loginAction } from "../../stores/userSlice";
import "./Login.css";
import Footer from "../../components/Footer";

function Login() {
  const [username, setUserid] = useState("");
  const [password, setPwd] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();


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
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      setCookie("auth", result.data, 7);
      dispatch(loginAction(result.data.member));
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("로그인에 실패했습니다");
    }
  }

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
        <br />
        <br />
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
          <div
            onClick={() => {
              navigate("/joinForm");
            }}
          >
            회원가입
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>아이디 찾기</div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>비밀번호 찾기</div>
        </div>
        <div className="otherlogin">
          <div className="google">
            <img src="/images/google.png" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>Google 계정으로 로그인</div>
          </div>
          <br />
          <div className="kakao">
            <img src="/images/kakao.png" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>카카오 계정으로 로그인</div>
          </div>
          <br />
          <div className="naver">
            <img src="/images/naver.png" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>naver 계정으로 로그인</div>
          </div>
        </div>
        <br></br>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
