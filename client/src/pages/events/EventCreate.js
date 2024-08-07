import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/Reset.css";
import "./EventUpCreate.css";
import { useSelector } from "react-redux";

function EventCreateBanner() {
  //const [ loginUser, setLoginUser ] = useState({});
  const loginUser = useSelector((state) => state.user);

  const [pass, setPass] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [contentImages, setContentImages] = useState("");
  const [bannersavefilename, setBannerSaveFileName] = useState("");
  const [contentsavefilename, setContentSaveFileName] = useState("");
  const [imgStyle, setImgStyle] = useState({ display: "none" });
  const [bannerimgSrc, setBannerImgSrc] = useState(
    "http://via.placeholder.com/800x213"
  );
  const [contentimgSrc, setContentImgSrc] = useState(
    "http://via.placeholder.com/800x2000"
  );
  const navigate = useNavigate();

  function onSubmit() {
    axios
      .post("/api/events/createEvent", {
        userid: loginUser.userid,
        email: loginUser.email,
        pass,
        title,
        date,
        bannerImage,
        contentImages,
        bannersavefilename,
        contentsavefilename,
      })
      .then(() => {
        navigate("/events");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //FileUpload 수정해야됨!!
  async function onFileUpload(e) {
    const formData = new FormData();
    formData.append("bannerImage", e.target.files[0]);
    formData.append("contentImages", e.target.files[0]);
    const result = await axios.post("/api/events/fileupload", formData);
    setBannerSaveFileName(result.data.bannersavefilename);
    setContentSaveFileName(result.data.contentsavefilename);
    setBannerImage(result.data.bannerImage);
    setContentImages(result.data.contentImages);

    setBannerImgSrc(
      `http://localhost:8070/images/${result.data.bannersavefilename}`
    );
    setContentImgSrc(
      `http://localhost:8070/images/${result.data.contentsavefilename}`
    );
    setImgStyle({ width: "800px", display: "block" });
  }

  return (
    <div className="createEvent">
      <div className="createEvent_field">
        <label>작성자</label>
        <input type="text" value={loginUser.userid} readOnly />
      </div>
      {/* <div className='createEvent_field'>
                <label>이메일</label><input type="text"  value={loginUser.email} readOnly/>
            </div> */}
      <div className="createEvent_field">
        <label>PASS</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => {
            setPass(e.currentTarget.value);
          }}
        />
      </div>
      <div className="createEvent_field">
        <label>제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
      </div>
      <div className="createEvent_field">
        <label>날짜</label>
        <input
          type="text"
          value={date}
          onChange={(e) => {
            setDate(e.currentTarget.value);
          }}
        />
      </div>
      <div className="createEvent_field">
        <label>배너 이미지</label>
        <input
          type="file"
          onChange={(e) => {
            onFileUpload(e);
          }}
        />
        {/* e 를 전달인수로 전달해야 해당함수에서 방금 선택한 이미지를 인식할 수 있습니다. */}
      </div>
      <div className="createEvent_field">
        <div>
          <img src={bannerimgSrc} style={imgStyle} alt="banner_previewImg" />
        </div>
      </div>
      <div className="createEvent_field">
        <label>내용 이미지</label>
        <input
          type="file"
          onChange={(e) => {
            onFileUpload(e);
          }}
        />
        {/* e 를 전달인수로 전달해야 해당함수에서 방금 선택한 이미지를 인식할 수 있습니다. */}
      </div>
      <div className="createEvent_field">
        <div>
          <img src={contentimgSrc} style={imgStyle} alt="content_previewImg" />
        </div>
      </div>
      <div className="createEvent_btns">
        <button
          onClick={() => {
            onSubmit();
          }}
        >
          작성완료
        </button>
        <button
          onClick={() => {
            navigate("/events");
          }}
        >
          돌아가기
        </button>
      </div>
    </div>
  );
}

export default EventCreateBanner;
