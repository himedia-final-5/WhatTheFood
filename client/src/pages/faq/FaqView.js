import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./FaqView.css";
import { axios, defaultErrorHandler } from "utils";

function FaqView() {
  const [faqiew, setFaqView] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/faqs/${id}`)
      .then((result) => setFaqView(result.data))
      .catch(defaultErrorHandler);
  }, [id]);

  return (
    <div id="qv">
      <div id="qvbody">
        <br></br>
        <div id="qvcontainer">
          <div id="faq1">&nbsp;FAQ&nbsp;</div>
          <br></br>
          {/* <br></br> */}
          <div id="faq2">자주 묻는 질문</div>
          <div id="faq_line"></div>
          <br></br>
          <div id="head">
            <div id="title">Q.&nbsp;{faqiew.title}</div>
            <div id="date">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {(faqiew.date + "").substring(0, 10)}
            </div>
            <br></br>

            <div id="title">A.</div>
          </div>
          <div id="content">{faqiew.content}</div>
        </div>
        <br></br>
        <br></br>
        <Link id="back" to="/faqs">
          목록으로
        </Link>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}

export default FaqView;
