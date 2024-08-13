import { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import axios from "utils";
import { useNavigate } from "react-router-dom";

function NoticeWriteForm() {
  const navigate = useNavigate();

  return (
    <div className="adminContainer">
      <SubMenu />
      <h2>공지 등록</h2>
      <div className="productTable">
        <div className="field">
          <label>공지사항 제목</label>
          <input type="text" onChange={(e) => {}} />
        </div>
        <div className="field">
          <label>공지사항 내용</label>
          <div>
            <textarea rows="10" onChange={(e) => {}}></textarea>
          </div>
        </div>

        <div className="btns">
          <button onClick={() => {}}>등록</button>
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
