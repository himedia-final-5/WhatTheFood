import { useCallback, useEffect } from "react";
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
        .get(`/api/members/admin`, {
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

  // useEffect(() => {
  //   axios.get(`/api/members`);
  // });

  function mView(id) {
    navigate(`/mView/${id}`);
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminbtns" style={{ display: "flex", margin: "5px" }}>
        <input type="text" className="adminSearch" />
        <button>회원 검색</button>
      </div>
      <div className="productTable">
        <div className="adminrow">
          <div className="admincol">번호</div>
          <div className="admincol">회원 ID</div>
          <div className="admincol">회원 닉네임</div>
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
