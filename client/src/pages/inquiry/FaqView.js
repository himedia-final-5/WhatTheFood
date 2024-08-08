import React, { useState, useEffect } from "react";

import "./FaqView.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function FaqView() {
  const [word, setWord] = useState(null);
  const [qnaView, setQnaView] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/faqs/${id}`)
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
      <div id="qvbody">
        <div id="qvcontainer">
          <div id="head">
            <div id="title">{qnaView.title}</div>
            <hr></hr>
            <div id="date">{qnaView.date}</div>
            <hr></hr>
          </div>
          <div id="content">{qnaView.content}</div>
        </div>
        <br></br>
        <div
          id="back"
          onClick={() => {
            navigate(`/faq`);
          }}
        >
          목록으로
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default FaqView;
