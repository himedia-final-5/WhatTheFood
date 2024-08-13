import { useCallback, useEffect } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "stores";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function InquiryList() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const { content, pagination, setPageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/inquiries`, {
          params: { page },
        })
        .then((result) => setPageResponse(result.data))
        .catch(console.error),
    [user, setPageResponse],
  );

  useEffect(() => {
    if (content.length === 0) {
      onSelectPage(0);
    }
  }, [content, onSelectPage]);

  function userIqView(id) {
    navigate(`/iView/${id}`);
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="btns" style={{ display: "flex", margin: "5px" }}>
        <input type="text" />
        <button>유저ID 검색</button>
      </div>
      <div className="productTable">
        <div className="row">
          <div className="col">번호</div>
          <div className="col">문의제목</div>
          <div className="col">유저ID</div>
          <div className="col">등록날짜</div>
          <div className="col">답변여부</div>
        </div>
        {content.map((inquirylist, idx) => {
          return (
            <div
              className="row"
              key={idx}
              to={`/inquiryView/${inquirylist.id}`}
            >
              <div className="col">{inquirylist.id}</div>
              <div
                className="col"
                onClick={() => {
                  userIqView(inquirylist.id);
                }}
              >
                {inquirylist.title}
              </div>
              <div className="col">{inquirylist.username}</div>
              <div className="col">{inquirylist.date.substring(0, 10)}</div>
              <div className="col">
                {inquirylist.answer ? (
                  <div style={{ color: "green" }}>답변완료</div>
                ) : (
                  <div style={{ color: "grey" }}>답변처리중</div>
                )}
              </div>
            </div>
          );
        })}
        <br></br>
        <PaginationNav {...{ pagination, onSelectPage }} />
      </div>
    </div>
  );
}

export default InquiryList;
