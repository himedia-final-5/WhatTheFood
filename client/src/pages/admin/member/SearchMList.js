import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios, defaultErrorHandler } from "utils";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function SearchMList() {
  const navigate = useNavigate();
  const [isMounted, setMounted] = useState(false);
  const { username } = useParams();
  const { content, pagination, setPageResponse } = usePageResponse();
  const [word, setWord] = useState("");

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/members/username/${username}`, { params: { page } })
        .then((result) => setPageResponse(result.data))
        .catch(defaultErrorHandler),
    [username, setPageResponse],
  );

  if (!isMounted) {
    onSelectPage(0);
    setMounted(true);
  }

  function mView(id) {
    navigate(`/mView/${id}`);
  }

  function onSearch() {
    navigate(`/searchMList/${word}`);
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
          style={{ fontSize: "25px" }}
        >
          회원 검색
        </button>
      </div>
      <div className="productTable">
        <div className="adminrow">
          <div className="admincol">번호</div>
          <div className="admincol">회원 ID</div>
          <div className="admincol">회원 닉네임</div>
          <div className="admincol">회원 등급</div>
        </div>
        {content.map((member, idx) => {
          return (
            <div className="adminrow" key={idx} to={`/mView/${member.id}`}>
              <div className="admincol">{member.id}</div>
              <div
                className="admincol"
                onClick={() => {
                  mView(member.id);
                }}
                style={{ cursor: "pointer" }}
              >
                {member.username}
              </div>
              <div className="admincol">{member.nickname}</div>
              <div className="admincol">{member.role}</div>
            </div>
          );
        })}
        <br></br>
        <PaginationNav {...{ pagination, onSelectPage }} />
      </div>
    </div>
  );
}

export default SearchMList;
