import { useState, useEffect } from "react";
import { axios } from "utils";
import "./Notice.css";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { AdminFeature } from "components/util";
function NoticeView() {
  const [noticeView, setNoticeView] = useState({
    title: "",
    content: "",
    writeDate: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  /** @type {{data: PageResponse<NoticeSummary>}} */
  useEffect(() => {
    axios
      .get(`/api/notices/${id}`)
      .then((result) => {
        setNoticeView(result.data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);

  function deleteNotice() {
    const isDel = window.confirm("삭제 하시겠습니까?");
    if (isDel) {
      axios
        .delete(`/api/notices/${id}`)
        .then(() => {
          navigate("/notice");
        })
        .catch((err) => {
          console.error(err);
          alert("삭제에 실패했습니다.");
        });
    }
  }

  return (
    <div className="notice_container">
      <header class="notice_header">
        <h1 class="notice_title">&nbsp;Notice&nbsp;</h1>
        <h2 class="notice_subtitle">공지사항</h2>
        <AdminFeature>
          <Link
            to={`/UpdateNotice/${id}`}
            class="noticeWrite-text cursor-pointer"
            style={{ left: "265px", top: "75px" }}
          >
            <button>수정하기</button>
          </Link>
          <button
            class="noticeWrite-text cursor-pointer"
            onClick={() => {
              deleteNotice();
            }}
            style={{ left: "400px" }}
          >
            삭제하기
          </button>
        </AdminFeature>
        <div className="notice_line"></div>
      </header>
      <main class="notices">
        <article class="notice">
          <div class="notice-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g stroke="#000" fill="none">
                <path d="M7.09 17.425H5.456A2.453 2.453 0 0 1 3 14.97V9.243A2.451 2.451 0 0 1 5.455 6.79H7.09v10.636zm0 0c4.092 0 7.725 1.424 10.416 2.975.467.271 1.04-.243 1.04-.787V3.859c0-.566-.614-1.067-1.097-.771-2.553 1.57-6.267 3.7-10.358 3.7v10.637z"></path>
                <path d="M19.364 15.789h-.819V9.243h.819c.9 0 1.636.733 1.636 1.636v3.273a1.64 1.64 0 0 1-1.636 1.637z"></path>
              </g>
            </svg>
          </div>
          <div className="notice-details">
            <div className="notice-date">
              {noticeView.writeDate.slice(0, 10)}
            </div>
            <div className="notice_col">{noticeView.title}</div>
          </div>
        </article>
        <div className="notice-content">{noticeView.content}</div>
      </main>
      <div className="notice_line"></div>
    </div>
  );
}

export default NoticeView;
