import React from 'react'
import '../../Style/JoinForm.css'

function LoginForm() {
  return (
    <div className='body'>
      <div><label>회원가입</label></div>
      <div className='memberInfo'>
        <div className='Info'><label>아이디</label></div>
        <div className='Info'><label>비밀번호</label></div>
        <div className='Info'><label>비밀번호 확인</label></div>
        <div className='Info'><label>닉네임</label></div>
        <div className='Info'><label>이메일</label></div>
        <div className='Info'><label>이메일 인증코드</label></div>
        <div className='Info'><label>주소</label></div>
        <div className='Info'><label>상세주소</label></div>
        <div className='Info'><label>프로필 이미지</label></div>     
      </div>
    </div>
  )
}

export default LoginForm
