import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InquiryView.css";

import { useNavigate, useParams } from "react-router-dom";

function InquiryView() {
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
  }, []);

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
            <div id="iqvanswer">답변여부</div>
            <div id="iqvtitle">{qnaView.title}</div>
            <hr></hr>
            <div id="iqvdate">{qnaView.date}</div>
            <hr></hr>
          </div>
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
