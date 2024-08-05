import React from 'react'
import { useNavigate } from "react-router-dom";
import '../Style/Login.css'

function Login() {
  const navigate=useNavigate();
  return (
    <div className="body">
      <div className="logo" onClick={()=>{navigate('/')}}>오늘 뭐 먹지?</div>
      <br/>
      <br/>
      <div className="login">로그인/회원가입</div>
      <br/>

      <div className="otherlogin">
        <div className="google">Google  계정으로 로그인</div>
        <br/>
        <div className="kakao"> 카카오  계정으로 로그인</div>
        <br/>
        <div className="naver"> 네이버  계정으로 로그인</div>
      </div>
    </div>
  )
}

export default Login
