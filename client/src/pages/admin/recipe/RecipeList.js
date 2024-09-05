import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios, defaultErrorHandler } from "utils";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

const category = [
  { name: "전체", query: "" },
  { name: "한식", query: "한식" },
  { name: "양식", query: "양식" },
  { name: "일식", query: "일식" },
  { name: "중식", query: "중식" },
  { name: "분식", query: "분식" },
  { name: "간식", query: "간식" },
  { name: "베이킹", query: "베이킹" },
];

function RecipeList() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(category[0].query);
  const { content, pagination, handlePageResponse } = usePageResponse();
  const [page, setPage] = useState(0);
  const [word, setWord] = useState("");

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/recipes`, {
          params: { page, category: selectedCategory },
        })
        .then(handlePageResponse)
        .catch(defaultErrorHandler),
    [selectedCategory, handlePageResponse],
  );

  useEffect(() => {
    onSelectPage(page);
  }, [selectedCategory, page, onSelectPage]);

  function recipeView(id) {
    navigate(`/rView/${id}`);
  }

  const handleCategoryClick = async (query) => {
    setSelectedCategory(query);
    setPage(0);
  };

  function onSearch() {
    navigate(`/searchRList/${word}`);
  }
  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminbtns" style={{ display: "flex", margin: "5px" }}>
        {category.map((cat) => (
          <button
            key={cat.query}
            onClick={() => handleCategoryClick(cat.query)}
            className={`category_button ${selectedCategory === cat.query ? "active" : ""}`}
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
          회원ID 검색
        </button>
      </div>
      <div className="productTable">
        <div className="adminrow">
          <div className="admincol">번호</div>
          <div className="admincol">레시피 제목</div>
          <div className="admincol">회원ID</div>
          <div className="admincol">등록날짜</div>
        </div>
        {content.map((rcp, idx) => {
          return (
            <div className="adminrow" key={idx} to={`/rView/${rcp.id}`}>
              <div className="admincol">{rcp.id}</div>
              <div
                className="admincol"
                onClick={() => {
                  recipeView(rcp.id);
                }}
                style={{ cursor: "pointer" }}
              >
                {rcp.title}
              </div>

              <div className="admincol">
                {/* {(rcp.created_date + "").substring(0, 10)} */}
                {rcp.member.username}
              </div>
              <div className="admincol">
                {(rcp.createdDate + "").substring(0, 10)}
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

export default RecipeList;
