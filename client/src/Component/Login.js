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
      <div className='loginInput'>
        <input type="text" placeholder='아이디' />&nbsp;&nbsp;
        <input type="password" placeholder='비밀번호' />
      </div>
      <br>
      </br>
      <div className='loginButton'>
        <div className='loginButtonChild'>로그인</div>
      </div>
      <br>
      </br>
      <div className='searching'>      
        <div onClick={()=>{navigate('/joinForm')}}>회원가입</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>아이디 찾기</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>비밀번호 찾기</div>
      </div>
      <div className="otherlogin">
        <div className="google">
          <img src="http://localhost:8070/images/google.png"/>&nbsp;&nbsp;&nbsp;&nbsp;
          <div>Google  계정으로 로그인</div>
        </div>
        <br/>
        <div className="kakao">
          <img src="http://localhost:8070/images/kakao.png"/>&nbsp;&nbsp;&nbsp;&nbsp;
          <div>카카오 계정으로 로그인</div>
        </div>
        <br/>
        <div className="naver">
          <img src="http://localhost:8070/images/naver.png"/>&nbsp;&nbsp;&nbsp;&nbsp;
          <div>naver 계정으로 로그인</div>
        </div>
      </div>
    </div>
  )
}

export default Login
