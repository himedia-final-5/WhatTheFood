import React, { useState, useEffect } from "react";
import "./InquiryList.css";
import Pagination from "../../components/Pagination";
import axios from "../../utils/jwtUtil";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function InquiryList() {
  const loginUser = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [pageData, setPageData] = useState({
    content: [],
    number: 0,
    totalPages: 1,
    first: true,
    last: true,
  });

  const setPage = (page) => {
    axios
      .get(`/api/inquiries/email/user01`, {
        params: { pageNumber: page },
      })
      .then((result) => setPageData(result.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (pageData.content.length === 0) {
      setPage(pageData.number);
    }
  }, []);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="iqBody">
        <div className="iqCenter">
          <div id="iq1">
            <div id="blank"></div>
            <div>내 문의 내역</div>
            <div
              id="inquiryWrite"
              onClick={() => {
                navigate(`/inquiryWriteForm/`);
              }}
            >
              <img src="/images/inquirywrite.png" />
              문의하기
            </div>
          </div>
          <br></br>

          {pageData.content.map((inquirylist, idx) => {
            return (
              <div
                className="iqitem"
                key={idx}
                onClick={() => {
                  navigate(`/inquiryView/${inquirylist.id}`);
                }}
              >
                <div className="iqanswer">
                  {inquirylist.answer ? (
                    <div style={{ color: "green" }}>답변완료</div>
                  ) : (
                    <div style={{ color: "grey" }}>답변처리중</div>
                  )}
                </div>
                <div className="iqname">{inquirylist.title}</div>
                <div className="iqdate">
                  {inquirylist.date.substring(0, 10)}
                </div>
              </div>
            );
          })}
          <br></br>
          <Pagination pageData={pageData} setPage={setPage} />
          <br></br>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default InquiryList;
