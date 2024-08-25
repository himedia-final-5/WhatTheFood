import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Notice.css";
import { axios } from "utils";

function WriteNotice() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  function onSubmit() {
    axios
      .post("/api/notices", { title, content })
      .then(({ data }) => navigate(`/notices/${data.id}`))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="container max-w-screen-sm mb-8">
      <div className="field">
        <label>제목</label>
        <input
          className="noticeWrite-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>
      <div className="field">
        <label>내용</label>
        <textarea
          id="content"
          rows="10"
          value={content}
          style={{ resize: "none" }}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
      </div>
      <div className="btns">
        <button onClick={() => onSubmit()}>작성완료</button>
        <button onClick={() => navigate("/notices")}>돌아가기</button>
      </div>
    </div>
  );
}

export default WriteNotice;
