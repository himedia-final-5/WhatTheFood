import React, {useState, useEffect} from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import jaxios from '../../util/jwtUtil';

import '../../style/notice.css'


function Notice() {
    const loginUser = useSelector( state=>state.user ); 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [write_date , setWrite_date] = useState("");
    const navigate = useNavigate();

    function onSubmit(){
        jaxios.post('/api/notice/writeNotice', {nickname:loginUser.nickname, email:loginUser.email,  title, content })
        .then(()=>{
            navigate('/main')
        })
        .catch((err)=>{
            console.error(err);
        })
    }

   

  return (
    <div className='writeBoard'>
    <h2>Board Write Form</h2>
    <div className='field'>
        <label>작성자</label><input type="text" value={loginUser.nickname} />
    </div>
    
    <div className='field'>
        <label>제목</label>
        <input type="text" value={title} onChange={
            (e)=>{ setTitle( e.currentTarget.value ) }
        }/>
    </div>
    <div className='field'>
        <label>내용</label>
        <textarea rows="10" value={content} onChange={
            (e)=>{ setContent( e.currentTarget.value ) }
        }></textarea>
    </div>
    
    <div className='btns'>
        <button onClick={ ()=>{ onSubmit() } }>작성완료</button>
        <button onClick={ ()=>{ navigate('/main') }}>돌아가기</button>
    </div>
</div>
);
}

export default Notice
