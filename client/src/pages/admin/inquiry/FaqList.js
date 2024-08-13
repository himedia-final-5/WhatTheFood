import { useCallback, useEffect } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "stores";
import { usePageResponse } from "hooks";
import { PaginationNav } from "components/util";

function QnaList() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const { content, pagination, setPageResponse } = usePageResponse();

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(`/api/faqs`, {
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
    axios.get(`/api/faqs`);
  });

  function qnaView(id) {
    navigate(`/fView/${id}`);
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
            navigate("/writeFaq");
          }}
        >
          FAQ 등록
        </button>
      </div>
      <div className="productTable">
        <div className="row">
          <div className="col">번호</div>
          <div className="col">FAQ 제목</div>
          <div className="col">등록날짜</div>
        </div>
        {content.map((qnalist, idx) => {
          return (
            <div className="row" key={idx} to={`/fView/${qnalist.id}`}>
              <div className="col">{qnalist.id}</div>
              <div
                className="col"
                onClick={() => {
                  qnaView(qnalist.id);
                }}
                style={{ cursor: "pointer" }}
              >
                {qnalist.title}
              </div>

              <div className="col">{qnalist.date.substring(0, 10)}</div>
            </div>
          );
        })}
        <br></br>
        <PaginationNav {...{ pagination, onSelectPage }} />
      </div>
    </div>
  );
}

export default QnaList;
