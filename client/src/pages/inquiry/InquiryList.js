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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user],
  );

  // 페이지 로딩시 첫 페이지 데이터 로드
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onSelectPage(0), []);

  return (
    <UserFeatureContainer className="inquiryBody">
      <div className="inquiryCenter">
        <br></br>
        <div id="inquiry1">
          <div id="blank"></div>
          <div id="inquiryListTitle">내 문의 내역</div>
          <Link to="/inquiries/write" id="inquiryWrite">
            <img src="/images/inquirywrite.png" alt="write button" />
            문의하기
          </Link>
        </div>
        <div className="faq_line"></div>
        {content.map((inquirylist, idx) => {
          return (
            <Link
              className="inquiryitem"
              key={idx}
              to={`/inquiries/${inquirylist.id}`}
            >
              <div className="inquiryanswer">
                {inquirylist.answer ? (
                  <div style={{ color: "green" }}>답변완료</div>
                ) : (
                  <div style={{ color: "grey" }}>답변처리중</div>
                )}
              </div>
              <div className="inquiryname">{inquirylist.title}</div>
              <div className="inquirydate">
                {inquirylist.date.substring(0, 10)}
              </div>
            </Link>
          );
        })}
        <br></br>
        <PaginationNav {...{ pagination, onSelectPage }} />
        <br></br>
      </div>
      <br></br>
    </UserFeatureContainer>
  );
}

export default InquiryList;
