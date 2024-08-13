import React, { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useNavigate, useParams } from "react-router-dom";

function FaqUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [faqView, setFaqView] = useState({});

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(`/api/faqs/${id}`)
      .then((result) => {
        setFaqView(result.data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  function submitFaqud() {
    axios
      .post(`/api/faqs/${id}`, { title: title, content: content })
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
      <h2>FAQ 수정</h2>
      <div className="productTable">
        <div className="field">
          <label>FAQ 제목</label>
          <input
            type="text"
            placeholder={faqView.title}
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
              placeholder={faqView.content}
              onChange={(e) => {
                setContent(e.currentTarget.value);
              }}
            ></textarea>
          </div>
        </div>

        <div className="btns">
          <button
            onClick={() => {
              submitFaqud();
            }}
          >
            수정완료
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

export default FaqUpdate;
