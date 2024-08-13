import React, { useCallback, useEffect } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "stores";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function NoticeList() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const { content, pagination, setPageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/notices`, {
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
    axios.get(`/api/notices`);
  });

  function nView(id) {
    navigate(`/nView/${id}`);
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="btns" style={{ display: "flex", margin: "5px" }}>
        <input type="text" className="adminSearch" />
        <button>검색</button>
        <button
          style={{ marginLeft: "auto" }}
          onClick={() => {
            navigate("/wNotice");
          }}
        >
          공지사항 등록
        </button>
      </div>
      <div className="productTable">
        <div className="row">
          <div className="col">번호</div>
          <div className="col">공지사항</div>
          <div className="col">등록날짜</div>
        </div>
        {content.map((noticelist, idx) => {
          return (
            <div className="row" key={idx} to={`/nView/${noticelist.id}`}>
              <div className="col">{noticelist.id}</div>
              <div
                className="col"
                onClick={() => {
                  nView(noticelist.id);
                }}
                style={{ cursor: "pointer" }}
              >
                {noticelist.title}
              </div>

              <div className="col">{noticelist.writeDate.slice(0, 10)}</div>
            </div>
          );
        })}
        <br></br>
        <PaginationNav {...{ pagination, onSelectPage }} />
      </div>
    </div>
  );
}

export default NoticeList;
