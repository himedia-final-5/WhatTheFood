import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Notice.css";

function NoticeView() {
  return (
    <div>
      <Header setWord={setWord} />
      <div className="noticeBody">
        <div className="noticeCenter">
          <br></br>
          <div id="notice1">|Notice|</div>
          <br />
          <div id="notice2">공지사항</div>
          <br></br>
          <hr></hr>
          <div>
            <div>{}</div>
            <div>{}</div>
            <div>{}</div>
          </div>
          <div>목록으로</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NoticeView;
