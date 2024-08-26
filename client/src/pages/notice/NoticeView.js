import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./Notice.css";
import { axios, defaultErrorHandler } from "utils";

function NoticeView() {
  const [noticeView, setNoticeView] = useState({
    title: "",
    content: "",
    writeDate: "",
  });

  const { id } = useParams();

  /** @type {{data: PageResponse<NoticeSummary>}} */
  useEffect(() => {
    axios
      .get(`/api/notices/${id}`)
      .then((result) => setNoticeView(result.data))
      .catch(defaultErrorHandler);
  }, [id]);

  return (
    <div id="qv">
      <div id="qvbody">
        <br></br>
        <div id="qvcontainer">
          <div id="faq1">&nbsp;Notice&nbsp;</div>
          <br></br>
          {/* <br></br> */}
          <div id="faq2">공지사항</div>
          <div id="faq_line"></div>
          <br></br>
          <div id="head">
            <div id="title">&nbsp;{noticeView.title}</div>
            <div id="date">
              &nbsp;&nbsp;
              {(noticeView.writeDate + "").substring(0, 10)}
            </div>
            <br></br>
          </div>
          <div id="content">{noticeView.content}</div>
        </div>
        <br></br>
        <br></br>
        <Link id="back" to="/notices">
          목록으로
        </Link>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}

export default NoticeView;
