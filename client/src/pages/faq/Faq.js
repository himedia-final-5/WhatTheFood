import { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import "./Faq.css";
import { axios, defaultErrorHandler } from "utils";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function Faq() {
  const { content, pagination, handlePageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get("/api/faqs", { params: { page } })
        .then(handlePageResponse)
        .catch(defaultErrorHandler),
    [handlePageResponse],
  );

  useEffect(() => {
    if (content.length === 0) {
      onSelectPage(0);
    }
  }, [content, onSelectPage]);

  return (
    <div className="faqBody">
      <div className="faqCenter">
        <div id="faq1">&nbsp;FAQ&nbsp;</div>
        <br></br>

        <div id="faq2">자주 묻는 질문</div>
        <div className="faq_line"></div>
        {content.map((inquirylist, idx) => {
          return (
            <Link className="faqitem" key={idx} to={`/faqs/${inquirylist.id}`}>
              <div className="faqname">{inquirylist.title}</div>

              <div className="faqdate">{inquirylist.date.substring(0, 10)}</div>
            </Link>
          );
        })}
        <br></br>
      </div>
      <br></br>
      <PaginationNav {...{ pagination, onSelectPage }} />
      <br></br>
    </div>
  );
}

export default Faq;
