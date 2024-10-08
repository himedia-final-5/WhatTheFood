import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios, defaultErrorHandler } from "utils";

function NUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [noiceView, setNoticeView] = useState({});

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(`/api/notices/${id}`)
      .then((result) => setNoticeView(result.data))
      .catch(defaultErrorHandler);
  }, [id]);

  function submitNud() {
    axios
      .post(`/api/notices/${id}`, { title: title, content: content })
      .then(() => navigate("/noticeList"))
      .catch(defaultErrorHandler);
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminCategory">공지사항 수정</div>
      <div className="productTable">
        <div className="adminfield">
          <label className="labellabel">제목</label>
          <input
            type="text"
            style={{ fontSize: "20px" }}
            placeholder={noiceView.title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
        </div>
        <div className="adminfield">
          <label className="labellabel">내용</label>

          <textarea
            rows="10"
            style={{ fontSize: "20px" }}
            placeholder={noiceView.content}
            onChange={(e) => {
              setContent(e.currentTarget.value);
            }}
          ></textarea>
        </div>

        <div className="adminbtns">
          <button
            onClick={() => {
              submitNud();
            }}
          >
            수정완료
          </button>
          <button
            onClick={() => {
              navigate("/noticeList");
            }}
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default NUpdate;
