import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./Faq.css";
import { axios } from "utils";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function Faq() {
  const navigate = useNavigate();
  const { content, pagination, setPageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get("/api/faqs", { params: { page } })
        .then((result) => setPageResponse(result.data))
        .catch(console.error),
    [setPageResponse],
  );

  useEffect(() => {
    if (content.length === 0) {
      onSelectPage(0);
    }
  }, [content, onSelectPage]);

  return (
    <div className="faqBody">
      <div className="faqCenter">
        <br></br>
        <br></br>
        <div id="faq1">&nbsp;FAQ&nbsp;</div>
        <br></br>
        <br></br>
        <div id="faq2">자주 묻는 질문</div>
        <div className="faq_line"></div>
        {content.map((inquirylist, idx) => {
          return (
            <div
              className="faqitem"
              key={idx}
              onClick={() => {
                navigate(`/faqView/${inquirylist.id}`);
              }}
            >
              <div className="qnadate">{inquirylist.date.substring(0, 10)}</div>
              <br></br>
              <div className="qnaname">{inquirylist.title}</div>
            </div>
          );
        })}
      </div>
      <PaginationNav {...{ pagination, onSelectPage }} />
    </div>
  );
}

export default Faq;
