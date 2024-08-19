import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./InquiryView.css";
import { axios } from "utils";

function InquiryView() {
  const { id } = useParams();

  const [inquiry, setInquiry] = useState({});

  useEffect(() => {
    axios
      .get(`/api/inquiries/${id}`)
      .then((result) => {
        setInquiry(result.data);
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
      <div id="inquirybody">
        <div id="inquirycontainer">
          <div id="inquiryhead">
            <div id="inquiryanswer">
              {inquiry.answer ? (
                <div style={{ color: "green" }}>답변완료</div>
              ) : (
                <div style={{ color: "grey" }}>답변처리중</div>
              )}
            </div>
            <div id="inquirytitle">{inquiry.title}</div>
            <hr></hr>
            <div id="inquirydate">{(inquiry.date + "").substring(0, 10)}</div>
            <hr></hr>
          </div>
          <br></br>
          <div id="inquirycontent">{inquiry.content}</div>
          <div id="inquiryimage">
            {inquiry.image && <img src={inquiry.image} alt="이미지" />}
          </div>
        </div>
        <br></br>
        <Link id="inquiryback" to="/inquiries">
          목록으로
        </Link>
        <br></br>
      </div>
    </div>
  );
}

export default InquiryView;
