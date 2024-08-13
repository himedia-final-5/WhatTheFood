import React, { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useNavigate } from "react-router-dom";

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
      <h2>공지 등록</h2>
      <div className="productTable">
        <div className="field">
          <label>공지사항 제목</label>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
        </div>
        <div className="field">
          <label>공지사항 내용</label>
          <div>
            <textarea
              rows="10"
              onChange={(e) => {
                setContent(e.currentTarget.value);
              }}
            ></textarea>
          </div>
        </div>

        <div className="btns">
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
