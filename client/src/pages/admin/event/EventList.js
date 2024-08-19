import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios } from "utils";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function EventList() {
  const navigate = useNavigate();

  const { content, pagination, setPageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/events`, {
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
    axios.get(`/api/events`);
  });

  function eView(id) {
    navigate(`/eView/${id}`);
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminbtns" style={{ display: "flex", margin: "5px" }}>
        {/* <input type="text" className="adminSearch" />
        <button>검색</button> */}
        <button
          style={{ marginLeft: "auto", fontSize: "25px" }}
          onClick={() => {
            navigate("/wNotice");
          }}
        >
          이벤트 등록
        </button>
      </div>
      <div className="productTable">
        <div className="adminrow">
          <div className="admincol">번호</div>
          <div className="admincol">이벤트</div>
          <div className="admincol">등록날짜</div>
        </div>
        {content.map((noticelist, idx) => {
          return (
            <div className="adminrow" key={idx} to={`/eView/${noticelist.id}`}>
              <div className="admincol">{noticelist.id}</div>
              <div
                className="admincol"
                onClick={() => {
                  eView(noticelist.id);
                }}
                style={{ cursor: "pointer" }}
              >
                {noticelist.title}
              </div>

              <div className="admincol">
                {(noticelist.writeDate + "").substring(0, 10)}
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

export default EventList;
