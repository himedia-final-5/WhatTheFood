import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
//import axios from 'axios';
import './Footer.css'


import { useSelector, useDispatch } from 'react-redux';
//import { getCookie } from '../utils/cookieUtil';

function Footer() {
    const lUser = useSelector( state=>state.user );
    const [word, setWord] = useState(null);

    const navigate = useNavigate();

    useEffect(()=>{

    })


  return (
    <div>
    <hr></hr>
        <div className="footer">
                    로그인&nbsp;&nbsp;&nbsp;&nbsp;<div style={{cursor:'pointer'}} onClick={()=>{navigate(`/faq`)}}>FAQ</div>&nbsp;&nbsp;&nbsp;&nbsp;<div style={{cursor:'pointer'}} onClick={()=>{navigate(`/inquiryList`)}}>문의하기</div>&nbsp;&nbsp;&nbsp;&nbsp;공지사항&nbsp;&nbsp;&nbsp;&nbsp;개인정보처리방침<br/>
                     기사배열 책임자 : 김수향&nbsp;&nbsp;|&nbsp;&nbsp;청소년 보호 책임자 : 이정규<br/>
            본 콘텐츠의 저작권은 제공처 또는 WhatTheFood에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.<br/>
                © WhatTheFood Corp.
        </div>
    </div>
  )
}

export default Footer