import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios, defaultErrorHandler } from "utils";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function FaqList() {
  const navigate = useNavigate();

  const { content, pagination, handlePageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/faqs`, { params: { page } })
        .then(handlePageResponse)
        .catch(defaultErrorHandler),
    [handlePageResponse],
  );

  useEffect(() => {
    if (content.length === 0) {
      onSelectPage(0);
    }
  }, [content, onSelectPage]);

  function faqView(id) {
    navigate(`/fView/${id}`);
  }
  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminbtns" style={{ display: "flex", margin: "5px" }}>
        {/* <input type="text" className="adminSearch" />
        <button>검색</button> */}
        <button
          style={{ marginLeft: "auto", fontSize: "25px" }}
          onClick={() => {
            navigate("/writeFaq");
          }}
        >
          FAQ 등록
        </button>
      </div>
      <div className="productTable">
        <div className="adminrow">
          <div className="admincol">번호</div>
          <div className="admincol">FAQ 제목</div>
          <div className="admincol">등록날짜</div>
        </div>
        {content.map((faq, idx) => {
          return (
            <div className="adminrow" key={idx} to={`/fView/${faq.id}`}>
              <div className="admincol">{faq.id}</div>
              <div
                className="admincol"
                onClick={() => {
                  faqView(faq.id);
                }}
                style={{ cursor: "pointer" }}
              >
                {faq.title}
              </div>

              <div className="admincol">{faq.date.substring(0, 10)}</div>
            </div>
          );
        })}
        <br></br>
        <PaginationNav {...{ pagination, onSelectPage }} />
      </div>
    </div>
  );
}

export default FaqList;
