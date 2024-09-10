import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Notice.css";
import { axios, defaultErrorHandler } from "@utils";
import { usePageResponse } from "@hooks";
import { PaginationNav } from "@components/util";

function Notice() {
  const { content, pagination, handlePageResponse } = usePageResponse();
  /** @type {{data: PageResponse<NoticeSummary>}} */

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get("/api/notices", { params: { page } })
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
        <div id="faq1">&nbsp;Notice&nbsp;</div>
        <br></br>

        <div id="faq2">공지사항</div>
        <div className="faq_line"></div>
        {content.map((inquirylist, idx) => {
          return (
            <Link
              className="faqitem"
              key={idx}
              to={`/notices/${inquirylist.id}`}
            >
              <div className="faqname" style={{ display: "flex" }}>
                <div
                  className="notice-icon"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginTop: "2px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                  >
                    <g stroke="#000" fill="none">
                      <path d="M7.09 17.425H5.456A2.453 2.453 0 0 1 3 14.97V9.243A2.451 2.451 0 0 1 5.455 6.79H7.09v10.636zm0 0c4.092 0 7.725 1.424 10.416 2.975.467.271 1.04-.243 1.04-.787V3.859c0-.566-.614-1.067-1.097-.771-2.553 1.57-6.267 3.7-10.358 3.7v10.637z"></path>
                      <path d="M19.364 15.789h-.819V9.243h.819c.9 0 1.636.733 1.636 1.636v3.273a1.64 1.64 0 0 1-1.636 1.637z"></path>
                    </g>
                  </svg>
                </div>
                &nbsp;&nbsp;{inquirylist.title}
              </div>

              <div className="faqdate">
                {inquirylist.writeDate.substring(0, 10)}
              </div>
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

export default Notice;
