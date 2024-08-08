import React, { useState, useEffect } from "react";

import "./InquiryList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function InquiryList() {
  const navigate = useNavigate();
  const [word, setWord] = useState(null);
  const [qnaList, setQnaList] = useState([]);
  const [inquiryList, setInquiryList] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/inquiries`)
      .then((result) => {
        setInquiryList(result.data);
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

          {inquiryList.map((inquirylist, idx) => {
            return (
              <div
                className="iqitem"
                key={idx}
                onClick={() => {
                  navigate(`/inquiryView/${inquirylist.id}`);
                }}
              >
                <div className="iqanswer">답변여부</div>
                <div className="iqname">{inquirylist.title}</div>
                <div className="iqdate">
                  {inquirylist.date.substring(0, 10)}
                </div>
              </div>
            );
          })}
        </div>
        <div id="paging" style={{ textAlign: "center", padding: "10px" }}>
          {/* {
                (paging.prev)?(
                    <span style={{cursor:"pointer"}} onClick={ ()=>{ onPageMove( paging.beginPage-1 ) } } > ◀ </span>
                ):(<span></span>)
            }
            {
                (beginend)?(
                    beginend.map((page, idx)=>{
                        return (
                            <span style={{cursor:"pointer"}} key={idx} onClick={
                                ()=>{ onPageMove( page ) }
                            }>&nbsp;{page}&nbsp;</span>
                        )
                    })
                ):(<></>)
            }
            {
                (paging.next)?(
                    <span style={{cursor:"pointer"}} onClick={
                        ()=>{ onPageMove( paging.endPage+1 ) }
                    }>&nbsp;▶&nbsp;</span>
                ):(<></>)
            } */}
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default InquiryList;
