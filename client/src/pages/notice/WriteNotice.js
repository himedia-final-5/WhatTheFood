import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import jaxios from "../../utils/jwtUtil";
import axios from "axios";
import "./Notice.css";

function Notice() {
  const loginUser = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [write_date, setWrite_date] = useState("");
  const navigate = useNavigate();
  const [notice, setNotice] = useState({});

  function onSubmit() {
    axios
      .post("/api/notices", { title, content })
      .then(() => {
        navigate("/notice");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="writeBoard">
      {/* <div className='field'>
        <label>작성자</label><input type="text"  />
    </div> */}

      <div class="form-container">
        <div class="field">
          <label>제목</label>
          <input
            class="noticeWrite-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div class="field">
          <label>내용</label>
          <textarea
            id="content"
            rows="10"
            value={content}
            style={{ resize: "none" }}
            onChange={(e) => setContent(e.currentTarget.value)}
          ></textarea>
        </div>
        <div class="btns">
          <button onClick={() => onSubmit()}>작성완료</button>
          <button onClick={() => navigate("/Notice")}>돌아가기</button>
        </div>
      </div>
    </div>
  );
}

export default Notice;
