import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios, defaultErrorHandler } from "@utils";
import { usePageResponse } from "@hooks";
import { PaginationNav } from "@components/util";

const category = [
  { name: "전체", query: "" },
  { name: "일반회원", query: "ROLE_USER" },
  { name: "쉐프", query: "ROLE_CHEF" },
  { name: "브랜드", query: "ROLE_BRAND" },
];

function MemberList() {
  const navigate = useNavigate();
  const [selectedRoleCategory, setSelectedRoleCategory] = useState(
    category[0].query,
  );
  const [page, setPage] = useState(0);
  const { content, pagination, handlePageResponse } = usePageResponse();
  const [word, setWord] = useState("");

  function onSearch() {
    navigate(`/searchMList/${word}`);
  }

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/members`, {
          params: { page, role: selectedRoleCategory },
        })
        .then(handlePageResponse)
        .catch(defaultErrorHandler),
    [selectedRoleCategory, handlePageResponse],
  );

  useEffect(() => {
    onSelectPage(page);
  }, [selectedRoleCategory, page, onSelectPage]);

  function mView(id) {
    navigate(`/mView/${id}`);
  }

  const handleCategoryClick = async (query) => {
    setSelectedRoleCategory(query);
    setPage(0);
  };

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminbtns" style={{ display: "flex", margin: "5px" }}>
        {category.map((cat) => (
          <button
            key={cat.query}
            onClick={() => handleCategoryClick(cat.query)}
            className={`category_button ${selectedRoleCategory === cat.query ? "active" : ""}`}
          >
            {cat.name}
          </button>
        ))}
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
        {content.map((memberlist, idx) => {
          return (
            <div className="adminrow" key={idx} to={`/mView/${memberlist.id}`}>
              <div className="admincol">{memberlist.id}</div>
              <div
                className="admincol"
                onClick={() => {
                  mView(memberlist.id);
                }}
                style={{ cursor: "pointer" }}
              >
                {memberlist.username}
              </div>

              <div className="admincol">{memberlist.nickname}</div>
              <div className="admincol">{memberlist.role}</div>
            </div>
          );
        })}
        <br></br>
        <PaginationNav {...{ pagination, onSelectPage }} />
      </div>
    </div>
  );
}

export default MemberList;
