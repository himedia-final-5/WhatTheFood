import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./InquiryList.css";
import { axios } from "utils";
import { useSelector } from "stores";

function InquiryList() {
  const loginUser = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [inquiryList, setInquiryList] = useState([]);
  const [paging, setPaging] = useState({});
  const [pageNumbers] = useState([]);
  const [page] = useState("");

  function updatePage(data) {
    setInquiryList(data.content);
    setPaging({
      number: data.number,
      totalPages: data.totalPages,
      first: data.first,
      last: data.last,
    });
  }

  useEffect(() => {
    axios
      .get(`/api/inquiries/username/${loginUser.username}`, {
        params: { page },
      })
      .then((result) => {
        updatePage(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [loginUser, page]);

  function onPageMove(page) {
    // 페이지 표시방식
    axios
      .get(`/api/inquiries/username/${loginUser.username}`, {
        params: { page },
      })
      .then((result) => {
        updatePage(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="iqBody">
        <div className="iqCenter">
          <div id="iq1">
            <div id="blank"></div>
            <div>내 문의 내역</div>
            <div
              id="inquiryWrite"
              onClick={() => {
                navigate(`/inquiryWriteForm/`);
              }}
            >
              <img src="/images/inquirywrite.png" alt="write button" />
              문의하기
            </div>
          </div>
          <br></br>

          {inquiryList.map((inquirylist, idx) => {
            return (
              <div
                className="iqitem"
                key={idx}
                onClick={() => {
                  navigate(`/inquiryView/${inquirylist.id}`);
                }}
              >
                <div className="iqanswer">
                  {inquirylist.answer ? (
                    <div style={{ color: "green" }}>답변완료</div>
                  ) : (
                    <div style={{ color: "grey" }}>답변처리중</div>
                  )}
                </div>
                <div className="iqname">{inquirylist.title}</div>
                <div className="iqdate">
                  {inquirylist.date.substring(0, 10)}
                </div>
              </div>
            );
          })}
          <br></br>
          <div id="paging" style={{ textAlign: "center", padding: "10px" }}>
            {!paging.first ? (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  onPageMove(paging.number - 1);
                }}
              >
                {" "}
                ◀{" "}
              </span>
            ) : (
              <span></span>
            )}
            {pageNumbers.map((page, idx) => (
              <span
                key={idx}
                style={{
                  cursor: "pointer",
                  fontWeight: paging.number === page ? "bold" : "normal",
                  margin: "0 5px",
                }}
                onClick={() => {
                  onPageMove(page);
                }}
              >
                {page}
              </span>
            ))}
            {!paging.last ? (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  onPageMove(paging.number + 1);
                }}
              >
                &nbsp;▶&nbsp;
              </span>
            ) : (
              <></>
            )}
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default InquiryList;
