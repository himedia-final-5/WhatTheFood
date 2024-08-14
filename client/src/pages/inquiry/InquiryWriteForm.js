import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./InquiryWriteForm.css";
import { axios } from "utils";
import { useSelector } from "stores";

function InquiryWriteForm() {
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setAppendImage] = useState("");
  const [appendImageSrc, setAppendImageSrc] = useState("");
  const [appendImageStyle, setAppendImageStyle] = useState({ display: "none" });

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
        navigate("/inquiryList");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function onFileUpload(e) {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    const response = await axios.post("/api/file/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageSrc = `/api/static/${response.data.name}`;
    setAppendImage(imageSrc);
    setAppendImageSrc(imageSrc);
    setAppendImageStyle({ width: "200px", height: "200px", display: "block" });
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="inquiryBody">
        <div id="inquiryWriteCenter">
          <div id="inquirywf1">문의 작성</div>
          <br></br>
          <div id="inquirywrite">
            <div className="inquirywfField">
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
            <div className="inquirywfField">
              <textarea
                rows="20"
                placeholder="문의내용을 작성해주세요."
                style={{ fontSize: "30px" }}
                onChange={(e) => {
                  setContent(e.currentTarget.value);
                }}
              ></textarea>
            </div>
            <br></br>
            <br></br>
            <div className="inquirywfField">
              <label>사진 첨부</label>
              <br />
              <input
                type="file"
                style={{ fontSize: "20px" }}
                onChange={(e) => {
                  onFileUpload(e);
                }}
              />
              <br />
              <div>
                <img
                  src={appendImageSrc}
                  style={appendImageStyle}
                  alt="appendImage"
                />
              </div>
            </div>
          </div>
          <br></br>
          <div className="inquiryinquiry">
            <div
              className="inquirywf2"
              onClick={() => {
                onSubmit();
              }}
            >
              작성 완료
            </div>
            <Link id="inquirywf2" to="/inquiryList">
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
