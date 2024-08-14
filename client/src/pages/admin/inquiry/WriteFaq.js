import { useState } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useNavigate } from "react-router-dom";

function WriteFaq() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function submitfaq() {
    axios
      .post(`/api/faqs`, { title: title, content: content })
      .then(() => {
        navigate("/faqList");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminCategory">FAQ 등록</div>
      <div className="productTable">
        <div className="adminfield">
          <label className="labellabel">FAQ 제목</label>
          <input
            type="text"
            style={{ fontSize: "20px" }}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
        </div>
        <div className="adminfield">
          <label className="labellabel">FAQ 내용</label>
          <textarea
            style={{ fontSize: "20px" }}
            rows="10"
            onChange={(e) => {
              setContent(e.currentTarget.value);
            }}
          ></textarea>
        </div>

        <div className="adminbtns">
          <button
            onClick={() => {
              submitfaq();
            }}
          >
            등록
          </button>
          <button
            onClick={() => {
              navigate("/FaqList");
            }}
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteFaq;
