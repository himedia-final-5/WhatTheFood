import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./InquiryList.css";
import { axios } from "utils";
import { useSelector } from "stores";
import { usePageResponse } from "hooks";
import { PaginationNav, UserFeatureContainer } from "components/util";

function InquiryList() {
  const user = useSelector((state) => state.user);

  const { content, pagination, setPageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) => {
      if (!user) {
        toast.error("로그인이 필요한 서비스입니다.");
        return;
      }

      axios
        .get(`/api/inquiries/username/${user.username}`, {
          params: { page },
        })
        .then((result) => setPageResponse(result.data))
        .catch(console.error);
    },
    [user, setPageResponse],
  );

  useEffect(() => {
    if (content.length === 0) {
      onSelectPage(0);
    }
  }, [content, onSelectPage]);

  return (
    <UserFeatureContainer>
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
            <Link to="/inquiryWriteForm" id="inquiryWrite">
              <img src="/images/inquirywrite.png" alt="write button" />
              문의하기
            </Link>
          </div>
          <br></br>

          {content.map((inquirylist, idx) => {
            return (
              <Link
                className="iqitem"
                key={idx}
                to={`/inquiryView/${inquirylist.id}`}
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
              </Link>
            );
          })}
          <br></br>
          <PaginationNav {...{ pagination, onSelectPage }} />
        </div>
      </div>
      <br></br>
    </UserFeatureContainer>
  );
}

export default InquiryList;
