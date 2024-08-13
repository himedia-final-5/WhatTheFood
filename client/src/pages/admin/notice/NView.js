import React, { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useParams, useNavigate } from "react-router-dom";

function NView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [noticeView, setNoticeView] = useState({});

  useEffect(() => {
    axios
      .get(`/api/notices/${id}`)
      .then((result) => {
        setNoticeView(result.data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  function deleteNotice() {
    axios
      .delete(`/api/notices/${id}`)
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
      <h2>공지사항</h2>
      <div className="productTable">
        <div className="field">
          <label>공지사항 제목</label>
          <div>{noticeView.title}</div>
        </div>

        <div className="field">
          <label>등록날짜</label>
          <div>{(noticeView.writeDate + "").substring(0, 10)}</div>
        </div>

        <div className="field">
          <label>공지사항 내용</label>
          <div>{noticeView.content}</div>
        </div>

        <div className="btns">
          <button
            onClick={() => {
              navigate(`/nUpdate/${noticeView.id}`);
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              deleteNotice();
            }}
          >
            삭제
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

export default NView;
