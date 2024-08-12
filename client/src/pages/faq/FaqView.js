import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./FaqView.css";
import { axios } from "utils";

function FaqView() {
  const [faqiew, setFaqView] = useState({});
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
        <Link id="back" to="/faq">
          목록으로
        </Link>
        <br></br>
      </div>
    </div>
  );
}

export default FaqView;
