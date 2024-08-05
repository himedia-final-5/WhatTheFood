import React, {useState, useEffect} from 'react'
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";


// import { useSelector, useDispatch } from 'react-redux';
// import { loginAction, logoutAction } from '../Store/userSlice';

// import { setCookie, getCookie, removeCookie } from '../Util/cookieUtil';



function Header() {

    useEffect(()=>{

    })
  return (
    <div className='Header'>
        <div>
            <div><img src="로고"/></div>
            <div><input type='text'/><img src="돋보기"/></div>
            <div><img src="카트(장바구니)"/></div>
            <div><img src="로그인&마이페이지&서브페이지"/></div>
        </div>
        <div>
            <div>레시피</div>
            <div>랭킹</div>
            <div>스토어</div>
            <div>공지사항</div>
            <div>이벤트</div>            
        </div>
    </div>
  )
}

export default Header
