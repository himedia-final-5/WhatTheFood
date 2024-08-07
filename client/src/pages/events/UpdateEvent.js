import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";
import "../../styles/Reset.css";
import "./EventUpCreate.css";
import { useSelector } from 'react-redux';

function UpdateEvent() {
    //const [ loginUser, setLoginUser ] = useState({});
    const loginUser = useSelector( state=>state.user);

    const [pass, setPass] = useState("");
    const [oldPass, setOldPass] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [contentImages, setContentImages] = useState("");
    const [savefilename, setSaveFileName] = useState("");

    const [oldImgSrc, setOldImgSrc] = useState('');
    const [imgStyle, setImgStyle] = useState({display:'none'});
    const [imgSrc, setImgSrc] = useState('http://via.placeholder.com/800x2000')
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(
      ()=>{
        axios.get(`/api/events/getEvent/${id}`)
        .then((result)=>{
          setTitle(result.data.title);
          setContentImages(result.data.contentImages);
          setSaveFileName(result.data.savefilename);
          setOldPass(result.data.pass);
          setOldImgSrc(`http://localhost:8070/image/${result.data.board.savefilename}`)
        })
        .catch((err)=>{console.log(err)})
      },[]
    );

    function onSubmit(){
        if( oldPass != pass){return alert('수정 패스워드가 일치하지 않습니다')}
        axios.post('/api/events/updateEvent', {id,title,contentImages,savefilename})
        .then(()=>{
            navigate(`/events/${id}`);
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
        setImgStyle({width:"800px", display:"block"});
    }


    return (
        <div className='createEvent'>
            <div className='createEvent_field'>
                <label>작성자</label><input type="text" value={loginUser.userid} readOnly/>
            </div>
            {/* <div className='createEvent_field'>
                <label>이메일</label><input type="text"  value={loginUser.email} readOnly/>
            </div> */}
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
                <label>날짜</label>
                <input type="text" value={date} onChange={
                    (e)=>{ setDate( e.currentTarget.value ) }
                }/>
            </div>
            <div className='createEvent_field'>
                <label>원래 이미지</label>
                <div><img src={oldImgSrc} style={{width:"800px"}} alt='oldimage'/></div>
            </div>
            <div className='createEvent_field'>
                <label>수정 이미지</label>
                <input type="file" onChange={(e)=>{ onFileUpload(e); }  }/>
                {/* e 를 전달인수로 전달해야 해당함수에서 방금 선택한 이미지를 인식할 수 있습니다. */}
            </div>
            <div className='createEvent_field'>
                <div><img src={imgSrc} style={imgStyle} alt="previewImg"/></div>
            </div>
            <div className='createEvent_btns'>
                <button onClick={ ()=>{ onSubmit() } }>작성완료</button>
                <button onClick={ ()=>{ navigate('/events') }}>돌아가기</button>
            </div>
        </div>
    )
}

export default UpdateEvent
