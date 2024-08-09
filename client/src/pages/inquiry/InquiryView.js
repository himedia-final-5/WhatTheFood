import React, { useState, useEffect } from "react";
import axios from "../../utils/jwtUtil";
import "./InquiryView.css";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function InquiryView() {
  const loginUser = useSelector((state) => state.user);
  const [word, setWord] = useState(null);
  const [qnaView, setQnaView] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/inquiries/${id}`)
      .then((result) => {
        setQnaView(result.data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [word]);

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
        </div>
        <br></br>
        <div
          id="iqvback"
          onClick={() => {
            navigate(`/inquiryList`);
          }}
        >
          목록으로
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default InquiryView;
