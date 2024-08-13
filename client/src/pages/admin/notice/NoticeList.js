import { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import axios from "utils";
import { useNavigate } from "react-router-dom";

function NoticeList() {
  const navigate = useNavigate();

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="btns" style={{ display: "flex", margin: "5px" }}>
        <input type="text" />
        <button>검색</button>
        <button
          style={{ marginLeft: "auto" }}
          onClick={() => {
            navigate("/wNotice");
          }}
        >
          공지사항 등록
        </button>
      </div>
      <div className="productTable">
        <div className="row">
          <div className="col">번호</div>
          <div className="col">공지사항</div>
          <div className="col">등록날짜</div>
        </div>
      </div>
    </div>
  );
}

export default NoticeList;
