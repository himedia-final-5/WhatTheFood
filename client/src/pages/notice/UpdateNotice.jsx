import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "./Notice.css";
import { axios, defaultErrorHandler } from "@utils";

function UpdateNotice() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/notices/${id}`)
      .then((result) => {
        const { title, content } = result.data;
        setTitle(title);
        setContent(content);
      })
      .catch(defaultErrorHandler);
  }, [id]);

  function onSubmit() {
    axios
      .post(`/api/notices/${id}`, { title, content })
      .then(() => {
        navigate("/notices");
        toast.success("공지사항이 수정되었습니다");
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
          defaultValue={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        {UpdateNotice.title}
      </div>
      <div className="field">
        <label>내용</label>
        <textarea
          id="content"
          rows="10"
          defaultValue={content}
          style={{ resize: "none" }}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
      </div>
      <div className="btns">
        <button onClick={() => onSubmit()}>수정완료</button>
        <button onClick={() => navigate("/notices")}>돌아가기</button>
      </div>
    </div>
  );
}

export default UpdateNotice;
