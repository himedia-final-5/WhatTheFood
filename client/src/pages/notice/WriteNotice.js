import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./Notice.css";
import { axios, defaultErrorHandler } from "utils";

function WriteNotice() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  function onSubmit() {
    axios
      .post("/api/notices", { title, content })
      .then(({ data }) => {
        // 작성된 게시글로 이동합니다.
        navigate(`/notices/${data.id}`);
        toast.success("공지사항이 등록되었습니다");
      })
      .catch(defaultErrorHandler);
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
