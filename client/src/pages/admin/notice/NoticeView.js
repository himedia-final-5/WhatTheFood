import { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import axios from "utils";
import { useNavigate } from "react-router-dom";

function NoticeView() {
  const navigate = useNavigate();

  return (
    <div className="adminContainer">
      <SubMenu />
      <h2>공지사항</h2>
      <div className="productTable">
        <div className="field">
          <label>공지사항 제목</label>
          <div>{}</div>
        </div>

        <div className="field">
          <label>등록날짜</label>
          <div>{}</div>
        </div>

        <div className="field">
          <label>공지사항 내용</label>
          <div>{}</div>
        </div>

        <div className="btns">
          <button onClick={() => {}}>수정</button>
          <button onClick={() => {}}>삭제</button>
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

export default NoticeView;
