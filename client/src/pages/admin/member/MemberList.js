import React, { useCallback, useEffect } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "stores";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function MemberList() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const { content, pagination, setPageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/members`, {
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

  useEffect(() => {
    axios.get(`/api/members`);
  });

  function mView(id) {
    navigate(`/mView/${id}`);
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="btns" style={{ display: "flex", margin: "5px" }}>
        <input type="text" className="adminSearch" />
        <button>회원 검색</button>
      </div>
      <div className="productTable">
        <div className="row">
          <div className="col">번호</div>
          <div className="col">회원 이름</div>
          <div className="col">회원 닉네임</div>
        </div>
        {content.map((memberlist, idx) => {
          return (
            <div className="row" key={idx} to={`/mView/${memberlist.id}`}>
              <div className="col">{memberlist.id}</div>
              <div
                className="col"
                onClick={() => {
                  mView(memberlist.id);
                }}
              >
                {memberlist.username}
              </div>

              <div className="col">{memberlist.nickname}</div>
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
