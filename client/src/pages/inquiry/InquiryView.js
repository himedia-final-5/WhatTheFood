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
    <div id="iqrv">
      <div className="inquirybody">
        <br></br>
        <div className="inquirycontainer">
          <div id="inquirytoptop"> 내 문의</div>
          <div id="iq_line"></div>
          <div id="inquiryhead">
            {inquiry.answer ? (
              <div
                id="inquiryanswer"
                style={{ color: "green", fontSize: "25px" }}
              >
                답변완료
              </div>
            ) : (
              <div
                id="inquiryanswer"
                style={{ color: "grey", fontSize: "25px" }}
              >
                답변처리중
              </div>
            )}
            <div id="inquirytitle">{inquiry.title}</div>
            <div id="inquirydate">{(inquiry.date + "").substring(0, 10)}</div>
          </div>

          <div id="inquirycontent">{inquiry.content}</div>
          <div id="iq_line2"></div>
          <div id="adminanswer">A.&nbsp;{inquiry.answer}</div>
          <br></br>
          {/* <div id="inquiryimage">
            {inquiry.image && <img src={inquiry.image} alt="이미지" />}
          </div> */}
        </div>
        <br></br>
        <br></br>
        <Link id="inquiryback" to="/inquiries">
          목록으로
        </Link>
        <br></br>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}

export default InquiryView;
