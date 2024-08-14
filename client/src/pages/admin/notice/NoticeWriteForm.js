import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios } from "utils";

function NoticeWriteForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function submitNotice() {
    axios
      .post(`/api/notices`, { title: title, content: content })
      .then(() => {
        navigate("/noticeList");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminCategory">공지 등록</div>
      <div className="productTable">
        <div className="adminfield">
          <label className="labellabel">제목</label>
          <input
            type="text"
            style={{ fontSize: "20px" }}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
        </div>
        <div className="adminfield">
          <label className="labellabel">내용</label>

          <textarea
            rows="10"
            style={{ fontSize: "20px" }}
            onChange={(e) => {
              setContent(e.currentTarget.value);
            }}
          ></textarea>
        </div>

        <div className="adminbtns">
          <button
            onClick={() => {
              submitNotice();
            }}
          >
            등록
          </button>
          <button
            onClick={() => {
              navigate("/noticeList");
            }}
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoticeWriteForm;
