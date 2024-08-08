import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./FaqWriteForm.css";

import { useNavigate } from "react-router-dom";

function InquiryWriteForm() {
  const [word, setWord] = useState(null);
  const loginUser = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  function onSubmit() {
    axios
      .post("/api/faqs", {
        userid: loginUser.userid,
        title,
        content,
      })
      .then(() => {
        navigate("/inquiryList");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <div className="faqBody">
        <div id="faqWriteCeter">
          <div id="faqwf1">FAQ 작성</div>
          <br></br>
          <div id="faqwrite">
            <div className="faqField">
              <label>제목</label>
              <br />
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.currentTarget.value);
                }}
              />
            </div>
            <br></br>
            <br></br>
            <div className="faqField">
              <label>FAQ 내용</label>
              <br />
              <textarea
                rows="20"
                onChange={(e) => {
                  setContent(e.currentTarget.value);
                }}
              ></textarea>
            </div>
            <br></br>
            <br></br>
          </div>
          <br></br>
          <div className="faqfaq">
            <div
              className="faq2"
              onClick={() => {
                onSubmit();
              }}
            >
              작성 완료
            </div>
            <div
              className="faq2"
              onClick={() => {
                navigate("/idk");
              }}
            >
              돌아가기
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default InquiryWriteForm;
