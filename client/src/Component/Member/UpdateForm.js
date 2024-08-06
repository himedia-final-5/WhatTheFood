import React , {useState, useEffect} from 'react'
import '../../Style/JoinForm.css'
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";
import axios from 'axios'


function UpdateForm() {
    const [userid, setUserid] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


  
 

  return (
    <div className='body'>
      <div className="logo" onClick={()=>{navigate('/')}}>오늘 뭐 먹지?</div>
      <br>
      </br>
      <br/>
      <div className='joinjoin'><label>회원정보 수정</label></div>
      <br>
      </br>
      
      <br>
      </br>
      <br>
      </br>
      
      <div className='memberInfo'>
        <div className='Info'><label>아이디</label><input value={userid} readOnly/></div>
        <br/>    
        <br>
        </br>
        <br>
        </br>                                               
        <div className='Info'><label>비밀번호</label><input/></div>        
        <br/>
        <div className='Info'><label>비밀번호 확인</label><input/></div>
        <br>
        </br>
        <br>
        </br>
        <br/>
        <div className='Info'><label>닉네임</label><input/></div>
        <br/>
        <button id="idcheck">닉네임 중복확인</button> 
        <div></div>
        <br>
        </br>
        <br>
        </br>
        <br/>
        <div className='Info'><label>이메일</label><input value={email} readOnly/></div>
   
        <br/>
      </div>
      <br>
      </br>
      <div className='join'><div id="join">수정완료</div><div id="join" onClick={()=>{navigate('/login')}}>돌아가기</div></div>
      <br>
      </br>
      <br>
      </br>
      <Footer/>  
    </div>
    
  )
}

export default UpdateForm