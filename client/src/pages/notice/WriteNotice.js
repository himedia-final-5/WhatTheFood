import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Notice.css";
import { axios } from "utils";

function Notice() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

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

      <h2>Board Write Form</h2>
      <div className="field">
        <label>제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
      </div>
      <div className="field">
        <label>내용</label>
        <textarea
          rows="10"
          value={content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        ></textarea>
      </div>

      <div className="btns">
        <button
          onClick={() => {
            onSubmit();
          }}
        >
          작성완료
        </button>
        <Link to="/notice">돌아가기</Link>

      </div>
    </div>
  );
}

export default Notice;
