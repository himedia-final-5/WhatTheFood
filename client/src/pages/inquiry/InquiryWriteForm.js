import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./InquiryWriteForm.css";
import { axios } from "utils";
import { useSelector } from "stores";

function InquiryWriteForm() {
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image] = useState("");

  const navigate = useNavigate();

  function onSubmit() {
    axios
      .post("/api/inquiries", {
        username: user.username,
        title,
        content,
        image,
      })
      .then(() => {
        navigate("/inquiries");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="inquiryBody">
      <div id="inquiryWriteCenter">
        <br></br>
        <div id="inquiryWriteForm">
          <div id="inquirywf1">문의 작성</div>
          <div className="iqwf_line"></div>
          <br></br>
          <div id="inquirywrite">
            <div className="inquirywfField">
              <input
                type="text"
                placeholder="제목"
                style={{ fontSize: "200%" }}
                onChange={(e) => {
                  setTitle(e.currentTarget.value);
                }}
              />
            </div>
            <br></br>
            <br></br>
            <div className="inquirywfField">
              <textarea
                rows="20"
                placeholder="문의내용을 작성해주세요."
                style={{ fontSize: "200%" }}
                onChange={(e) => {
                  setContent(e.currentTarget.value);
                }}
              ></textarea>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
        <br></br>
        <div className="inquiryinquiry">
          <div
            id="inquirywf2"
            onClick={() => {
              onSubmit();
            }}
          >
            작성 완료
          </div>
          <Link id="inquirywf2" to="/inquiries">
            돌아가기
          </Link>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default InquiryWriteForm;
