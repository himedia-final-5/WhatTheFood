import { useEffect, useState } from "react";
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
      <h2>FAQ 등록</h2>
      <div className="productTable">
        <div className="field">
          <label>FAQ 제목</label>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
        </div>
        <div className="field">
          <label>FAQ 내용</label>
          <div>
            <textarea
              rows="10"
              onChange={(e) => {
                setContent(e.currentTarget.value);
              }}
            ></textarea>
          </div>
        </div>

        <div className="btns">
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
