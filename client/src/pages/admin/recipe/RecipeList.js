import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios } from "utils";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function RecipeList() {
  const navigate = useNavigate();

  const { content, pagination, setPageResponse } = usePageResponse();
  const [word, setWord] = useState("");

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/recipes`, {
          params: { page },
        })
        .then((result) => setPageResponse(result.data))
        .catch(console.error),
    [setPageResponse],
  );

  useEffect(() => {
    if (content.length === 0) {
      onSelectPage(0);
    }
  }, [content, onSelectPage]);

  useEffect(() => {
    axios.get(`/api/recipes`);
  });

  function recipeView(id) {
    navigate(`/rView/${id}`);
  }

  function onSearch() {
    navigate(`/searchRList/${word}`);
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
                {rcp.username}
              </div>
              <div className="admincol">
                {(rcp.created_date + "").substring(0, 10)}
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
