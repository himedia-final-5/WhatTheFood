import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./InquiryList.css";
import { axios } from "utils";
import { useSelector } from "stores";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function InquiryList() {
  const loginUser = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { content, pagination, setPageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/inquiries/username/${loginUser.username}`, {
          params: { page },
        })
        .then((result) => setPageResponse(result.data))
        .catch(console.error),
    [loginUser, setPageResponse],
  );

  useEffect(() => {
    if (content.length === 0) {
      onSelectPage(0);
    }
  }, [content, onSelectPage]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="iqBody">
        <div className="iqCenter">
          <div id="iq1">
            <div id="blank"></div>
            <div>내 문의 내역</div>
            <div
              id="inquiryWrite"
              onClick={() => {
                navigate(`/inquiryWriteForm/`);
              }}
            >
              <img src="/images/inquirywrite.png" alt="write button" />
              문의하기
            </div>
          </div>
          <br></br>

          {content.map((inquirylist, idx) => {
            return (
              <div
                className="iqitem"
                key={idx}
                onClick={() => {
                  navigate(`/inquiryView/${inquirylist.id}`);
                }}
              >
                <div className="iqanswer">
                  {inquirylist.answer ? (
                    <div style={{ color: "green" }}>답변완료</div>
                  ) : (
                    <div style={{ color: "grey" }}>답변처리중</div>
                  )}
                </div>
                <div className="iqname">{inquirylist.title}</div>
                <div className="iqdate">
                  {inquirylist.date.substring(0, 10)}
                </div>
              </div>
            );
          })}
          <br></br>
          <PaginationNav {...{ pagination, onSelectPage }} />
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default InquiryList;
