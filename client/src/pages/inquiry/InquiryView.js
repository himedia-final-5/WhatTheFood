import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./InquiryView.css";
import { axios } from "utils";

function InquiryView() {
  const { id } = useParams();

  const [qnaView, setQnaView] = useState({});

  useEffect(() => {
    axios
      .get(`/api/inquiries/${id}`)
      .then((result) => {
        setQnaView(result.data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="iqvbody">
        <div id="iqvcontainer">
          <div id="iqvhead">
            <div id="iqvanswer">
              {qnaView.answer ? (
                <div style={{ color: "green" }}>답변완료</div>
              ) : (
                <div style={{ color: "grey" }}>답변처리중</div>
              )}
            </div>
            <div id="iqvtitle">{qnaView.title}</div>
            <hr></hr>
            <div id="iqvdate">{(qnaView.date + "").substring(0, 10)}</div>
            <hr></hr>
          </div>
          <br></br>
          <div id="iqvcontent">{qnaView.content}</div>
          <div id="iqvimage">
            {qnaView.image && <img src={qnaView.image} alt="이미지" />}
          </div>
        </div>
        <br></br>
        <Link id="iqvback" to="/inquiryList">
          목록으로
        </Link>
        <br></br>
      </div>
    </div>
  );
}

export default InquiryView;
