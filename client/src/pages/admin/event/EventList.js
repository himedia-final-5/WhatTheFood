import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios, defaultErrorHandler } from "utils";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function EventList() {
  const navigate = useNavigate();

  const { content, pagination, setPageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/events`, { params: { page } })
        .then((result) => setPageResponse(result.data))
        .catch(defaultErrorHandler),
    [setPageResponse],
  );

  useEffect(() => {
    if (content.length === 0) {
      onSelectPage(0);
    }
  }, [content, onSelectPage]);

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
            navigate("/wEvent");
          }}
        >
          이벤트 등록
        </button>
      </div>
      <div className="productTable">
        <div className="adminrow">
          <div className="admincol">번호</div>
          <div className="admincol">이벤트 제목</div>
          <div className="admincol">이벤트 기간</div>
          <div className="admincol">진행 여부</div>
        </div>
        {content.map((eventlist, idx) => {
          return (
            <div className="adminrow" key={idx} to={`/eView/${eventlist.id}`}>
              <div className="admincol">{eventlist.id}</div>
              <div
                className="admincol"
                onClick={() => {
                  eView(eventlist.id);
                }}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={eventlist.bannerImage}
                  style={{ width: "100%", height: "95px" }}
                  alt="event banner"
                />
              </div>

              <div className="admincol">
                {(eventlist.startDate + "").substring(0, 10)} ~{" "}
                {eventlist.endDate && (eventlist.endDate + "").substring(0, 10)}
              </div>

              <div className="admincol">{eventlist.title}</div>
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
