import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./FaqWriteForm.css";
import { useSelector } from "stores";
import { axios } from "utils";

function InquiryWriteForm() {
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  function onSubmit() {
    axios
      .post("/api/faqs", {
        userid: user.userid,
        title,
        content,
      })
      .then(() => {
        navigate("/idk");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <div className="faqBody">
        <div id="faqWriteCenter">
          <div id="faqwf1">FAQ 작성</div>
          <br></br>
          <div id="faqwrite">
            <div className="faqField">
              {/* <label>제목</label> */}
              <br />
              <input
                type="text"
                placeholder="제목"
                style={{ fontSize: "30px" }}
                onChange={(e) => {
                  setTitle(e.currentTarget.value);
                }}
              />
            </div>
            <br></br>
            <br></br>
            <div className="faqField">
              {/* <label>FAQ 내용</label> */}
              <br />
              <textarea
                rows="20"
                placeholder="FAQ 내용 작성"
                style={{ fontSize: "30px" }}
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
            <Link id="back" to="/faq">
              돌아가기
            </Link>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default InquiryWriteForm;
