import React, { useCallback, useEffect, useState } from "react";

import "./Notice.css";
import { axios } from "utils";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";
import { Link } from "react-router-dom";

function Notice() {
  const { content, pagination, setPageResponse } = usePageResponse();
  /** @type {{data: PageResponse<NoticeSummary>}} */

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get("/api/notices", { params: { page } })
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
    <div class="notice_container">
      <header class="notice_header">
        <h1 class="notice_title">&nbsp;Notice&nbsp;</h1>
        <h2 class="notice_subtitle">공지사항</h2>

        <div class="noticeWrite-container">
          <Link to="/WriteNotice" class="noticeWrite-text cursor-pointer">
            <button>게시글 쓰기</button>
          </Link>
        </div>

        <div className="notice_line"></div>
      </header>
      {content.length
        ? content.map((notice, idx) => {
            return (
              <main class="notices">
                <article class="notice">
                  <div class="notice-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                    >
                      <g stroke="#000" fill="none">
                        <path d="M7.09 17.425H5.456A2.453 2.453 0 0 1 3 14.97V9.243A2.451 2.451 0 0 1 5.455 6.79H7.09v10.636zm0 0c4.092 0 7.725 1.424 10.416 2.975.467.271 1.04-.243 1.04-.787V3.859c0-.566-.614-1.067-1.097-.771-2.553 1.57-6.267 3.7-10.358 3.7v10.637z"></path>
                        <path d="M19.364 15.789h-.819V9.243h.819c.9 0 1.636.733 1.636 1.636v3.273a1.64 1.64 0 0 1-1.636 1.637z"></path>
                      </g>
                    </svg>
                  </div>
                  <div class="notice-details">
                    <div className="notice-date">
                      {notice.writeDate.slice(0, 10)}
                    </div>
                    <Link
                      to={`/noticeView/${notice.id}`}
                      className="notice_col"
                    >
                      {notice.title}
                    </Link>
                  </div>
                </article>
              </main>
            );
          })
        : null}

      <PaginationNav {...{ pagination, onSelectPage }} />
    </div>
  );
}

export default Notice;
