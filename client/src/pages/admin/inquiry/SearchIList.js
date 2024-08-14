import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios } from "utils";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function SearchIList() {
  const navigate = useNavigate();
  const [isMounted, setMounted] = useState(false);
  const { username } = useParams();
  const { content, pagination, setPageResponse } = usePageResponse();
  const [word, setWord] = useState("");

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/inquiries/username/${username}`, {
          params: { page },
        })
        .then((result) => setPageResponse(result.data))
        .catch(console.error),
    [username, setPageResponse],
  );

  if (!isMounted) {
    onSelectPage(0);
    setMounted(true);
  }

  function userIqView(id) {
    navigate(`/iView/${id}`);
  }

  function onSearch() {
    navigate(`/searchIList/${word}`);
    setMounted(false);
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminbtns" style={{ display: "flex", margin: "5px" }}>
        <input
          type="text"
          className="adminSearch"
          onChange={(e) => {
            setWord(e.currentTarget.value);
          }}
        />
        <button
          onClick={() => {
            onSearch();
          }}
        >
          유저ID 검색
        </button>
      </div>
      <div className="productTable">
        <div className="adminrow">
          <div className="admincol">번호</div>
          <div className="admincol">문의제목</div>
          <div className="admincol">유저ID</div>
          <div className="admincol">등록날짜</div>
          <div className="admincol">답변여부</div>
        </div>
        {content.map((inquirylist, idx) => {
          return (
            <div
              className="adminrow"
              key={idx}
              to={`/inquiryView/${inquirylist.id}`}
            >
              <div className="admincol">{inquirylist.id}</div>
              <div
                className="admincol"
                onClick={() => {
                  userIqView(inquirylist.id);
                }}
                style={{ cursor: "pointer" }}
              >
                {inquirylist.title}
              </div>
              <div className="admincol">{inquirylist.username}</div>
              <div className="admincol">
                {inquirylist.date.substring(0, 10)}
              </div>
              <div className="admincol">
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

export default SearchIList;
