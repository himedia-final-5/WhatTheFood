import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios, defaultErrorHandler } from "@utils";

function FaqView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [faqView, setFaqView] = useState({});

  useEffect(() => {
    axios
      .get(`/api/faqs/${id}`)
      .then((result) => setFaqView(result.data))
      .catch(defaultErrorHandler);
  }, [id]);

  function deleteFaq() {
    const ans = window.confirm("해당 FAQ를 삭제하시겠습니까?");
    if (ans) {
      axios
        .delete(`/api/faqs/${id}`)
        .then(() => navigate("/faqList"))
        .catch(defaultErrorHandler);
    }
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminCategory">FAQ</div>
      <div className="productTable">
        <div className="adminfield">
          <label className="labellabel">제목</label>
          <div className="labelcontent">{faqView.title}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">등록날짜</label>
          <div className="labelcontent">
            {(faqView.date + "").substring(0, 10)}
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">내용</label>
          <div className="labelcontent">{faqView.content}</div>
        </div>

        <div className="adminbtns">
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
