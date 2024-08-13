import { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useParams, useNavigate } from "react-router-dom";

function FaqView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [faqView, setFaqView] = useState({});

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

  function deleteFaq() {
    axios
      .delete(`/api/faqs/${id}`)
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
      <h2>FAQ</h2>
      <div className="productTable">
        <div className="field">
          <label>FAQ 제목</label>
          <div>{faqView.title}</div>
        </div>

        <div className="field">
          <label>등록날짜</label>
          <div>{(faqView.date + "").substring(0, 10)}</div>
        </div>

        <div className="field">
          <label>FAQ 내용</label>
          <div>{faqView.content}</div>
        </div>

        <div className="btns">
          <button
            onClick={() => {
              navigate(`/faqUpdate/${faqView.id}`);
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              deleteFaq();
            }}
          >
            삭제
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

export default FaqView;
