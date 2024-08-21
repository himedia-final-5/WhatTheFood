import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios } from "utils";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function SearchRecipeList() {
  const navigate = useNavigate();
  const [isMounted, setMounted] = useState(false);
  const { username } = useParams();
  const { content, pagination, setPageResponse } = usePageResponse();
  const [word, setWord] = useState("");

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/recipes/username/${username}`, {
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

  function rView(id) {
    navigate(`/rView/${id}`);
  }

  function onSearch() {
    navigate(`/searchRList/${word}`);
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
          <div className="admincol">레시피 제목</div>
          <div className="admincol">회원 ID</div>
          <div className="admincol">등록날짜</div>
        </div>
        {content.map((recipe, idx) => {
          return (
            <div className="adminrow" key={idx} to={`/mView/${recipe.id}`}>
              <div className="admincol">{recipe.id}</div>
              <div
                className="admincol"
                onClick={() => {
                  rView(recipe.id);
                }}
                style={{ cursor: "pointer" }}
              >
                {recipe.title}
              </div>
              <div className="admincol">{recipe?.member?.username}</div>
              <div className="admincol">
                {(recipe.createdDate + "").substring(0, 10)}
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

export default SearchRecipeList;
