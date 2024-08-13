import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Notice.css";
import { axios } from "utils";

function Notice() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [notice, setNotice] = useState({});

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
        navigate("/notice");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="writeBoard">
      <div class="form-container">
        <div class="field">
          <label>제목</label>
          <input
            class="noticeWrite-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          {Notice.title}
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
          <button onClick={() => onSubmit()}>수정완료</button>
          <button onClick={() => navigate("/Notice")}>돌아가기</button>
        </div>
      </div>
    </div>
  );
}

export default Notice;
