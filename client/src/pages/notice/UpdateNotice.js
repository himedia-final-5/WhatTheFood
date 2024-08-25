import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Notice.css";
import { axios } from "utils";

function UpdateNotice() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [, setNotice] = useState({});

  useEffect(() => {
    axios
      .get(`/api/notices/${id}`)
      .then((result) => setNotice(result.data))
      .catch(console.error);
  }, [id]);

  function onSubmit() {
    axios
      .post(`/api/notices/${id}`, { title, content })
      .then(() => {
        navigate("/notices");
      })
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
        {UpdateNotice.title}
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
        <button onClick={() => onSubmit()}>수정완료</button>
        <button onClick={() => navigate("/Notice")}>돌아가기</button>
      </div>
    </div>
  );
}

export default UpdateNotice;
