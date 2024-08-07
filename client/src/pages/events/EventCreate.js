import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../../styles/Reset.css";
import "./EventCreate.css";
import { useSelector } from 'react-redux';

function EventCreate() {
    //const [ loginUser, setLoginUser ] = useState({});
    const loginUser = useSelector( state=>state.user);

    const [title, setTitle] = useState("");
    const [pass, setPass] = useState("");
    const [contentImages, setContentImages] = useState("");
    const [savefilename, setSaveFileName] = useState("");
    const [imgStyle, setImgStyle] = useState({display:'block'});
    const [imgSrc, setImgSrc] = useState('http://via.placeholder.com/800x1000')
    const navigate = useNavigate();


    function onSubmit(){
        axios.post('/api/events/createEvent', {userid:loginUser.userid, email:loginUser.email, pass, title, contentImages, savefilename})
        .then(()=>{
            navigate('/events')
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    //FileUpload 수정해야됨!!
    async function onFileUpload(e){
        const formData = new FormData();
        formData.append('contentImages', e.target.files[0]);
        const result = await axios.post('/api/events/fileupload', formData);
        setSaveFileName(result.data.savefilename);
        setContentImages(result.data.contentImages);

        setImgSrc( `http://localhost:8070/images/${result.data.savefilename}` );
        setImgStyle({width:"800px"});
    }


    return (
        <div className='createEvent'>
            <div className='createEvent_field'>
                <label>작성자</label><input type="text" value={loginUser.userid} readOnly/>
            </div>
            <div className='createEvent_field'>
                <label>이메일</label><input type="text"  value={loginUser.email} readOnly/>
            </div>
            <div className='createEvent_field'>
                <label>PASS</label><input type="password"  value={pass} onChange={
                    (e)=>{ setPass(e.currentTarget.value) }
                }/>
            </div>
            <div className='createEvent_field'>
                <label>제목</label>
                <input type="text" value={title} onChange={
                    (e)=>{ setTitle( e.currentTarget.value ) }
                }/>
            </div>
            <div className='createEvent_field'>
                <label>이미지</label>
                <input type="file" onChange={(e)=>{ onFileUpload(e); }  }/>
                {/* e 를 전달인수로 전달해야 해당함수에서 방금 선택한 이미지를 인식할 수 있습니다. */}
            </div>
            <div className='createEvent_field'>
                <label>이미지 미리보기</label>
                <div><img src={imgSrc} style={imgStyle} alt=""/></div>
            </div>
            <div className='createEvent_btns'>
                <button onClick={ ()=>{ onSubmit() } }>작성완료</button>
                <button onClick={ ()=>{ navigate('/events') }}>돌아가기</button>
            </div>
        </div>
    )
}

export default EventCreate
