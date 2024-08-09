// import React, {useState, useEffect} from 'react'
import { useEffect, useState } from "react";
import "./Notice.css";
import axios from "axios";

function Notice() {
  const [noticeList, setNoticeList] = useState([]);
  const [paging, setPaging] = useState({});
  const [pageNumbers] = useState([]);
  function updatePage(data) {
    setNoticeList(data.content);
    setPaging({
      number: data.number,
      totalPages: data.totalPages,
      first: data.first,
      last: data.last,
    });
  }

  useEffect(() => {
    axios
      .get("/api/notices")
      .then((result) => {
        console.log("확인용22", result.data);
        updatePage(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function onPageMove(page) {
    // 페이지 표시방식
    axios
      .get(`/api/notices`, {
        params: {
          pageNumber: page,
        },
      })
      .then((result) => {
        updatePage(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return "날짜 없음";

    const date = new Date(timestamp);

    return date.toISOString().substring(0, 10);
  };

  return (
    <div class="notice_container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <header class="notice_header">
        <h1 class="notice_title">&nbsp;Notice&nbsp;</h1>
        <h2 class="notice_subtitle">공지사항</h2>
        <div className="notice_line"></div>
      </header>
      {noticeList.length
        ? noticeList.map((notice, idx) => {
            return (
              <main class="notices">
                <article class="notice">
                  <div class="notice-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                    >
                      <g stroke="#000" fill="none">
                        <path d="M7.09 17.425H5.456A2.453 2.453 0 0 1 3 14.97V9.243A2.451 2.451 0 0 1 5.455 6.79H7.09v10.636zm0 0c4.092 0 7.725 1.424 10.416 2.975.467.271 1.04-.243 1.04-.787V3.859c0-.566-.614-1.067-1.097-.771-2.553 1.57-6.267 3.7-10.358 3.7v10.637z"></path>
                        <path d="M19.364 15.789h-.819V9.243h.819c.9 0 1.636.733 1.636 1.636v3.273a1.64 1.64 0 0 1-1.636 1.637z"></path>
                      </g>
                    </svg>
                  </div>
                  <div class="notice-details">
                    <div className="notice-date">
                      {formatDate(notice.writeDate)}
                    </div>
                    <div
                      className="notice_col"
                      onClick={() => {
                        // onBoardView( notice.id );
                      }}
                    >
                      {notice.title}
                    </div>
                  </div>
                </article>
              </main>
            );
          })
        : null}
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
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Notice;
