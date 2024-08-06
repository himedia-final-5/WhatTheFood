import React, {useState, useEffect} from 'react'
import '../Style/Header.css'
// import axios from 'axios';
import { useNavigate } from "react-router-dom";


// import { useSelector, useDispatch } from 'react-redux';
// import { loginAction, logoutAction } from '../Store/userSlice';

// import { setCookie, getCookie, removeCookie } from '../Util/cookieUtil';



function Header() {

    useEffect(()=>{

    })
    const navigate=useNavigate();
  return (
    <div className='Header'>
        <div className="top">
            <div className="toptop" onClick={()=>{navigate('/')}}>오늘 뭐 먹지?</div>
            <div className="toptop"><input type='text'/><img src="돋보기"/></div>
            <div className="toptop"><img src="카트(장바구니)"/></div>
            <div className="toptop" onClick={()=>{navigate('/login')}}><img src="로그인&마이페이지&서브페이지"/></div>
        </div>
        <div className='submenu'>
          <div>마이페이지</div>
          <div>찜레시피</div>
          <div>장바구니</div>
          <div>문의하기</div>
          <div>로그아웃</div>
        </div>

        <div className="menu">
            <div className='topMenu'>레시피</div>
            <div className='topMenu'>랭킹</div>
            <div className='topMenu'>스토어</div>
            <div className='topMenu'>공지사항</div>
            <div className='topMenu'>이벤트</div>            
        </div>
    </div>
  )
}

export default Header
