import React, { useState, useEffect } from "react";

import "./FaqView.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function FaqView() {
  const [faqiew, setFaqView] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/faqs/${id}`)
      .then((result) => {
        setFaqView(result.data);
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
      <div id="qvbody">
        <div id="qvcontainer">
          <div id="head">
            <div id="title">{faqiew.title}</div>
            <hr></hr>
            <div id="date">{(faqiew.date + "").substring(0, 10)}</div>
            <hr></hr>
          </div>
          <br></br>
          <div id="content">{faqiew.content}</div>
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
