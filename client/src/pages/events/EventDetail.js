import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EventDetail.css";
import "../../styles/Reset.css";
import jaxios from "../../utils/jwtUtil";

function EventDetail() {
  const navigate = useNavigate();
  const [events, setEvents] = useState({
    startDate: "",
    endDate: "",
  });

  const { id } = useParams();

  useEffect(() => {
    jaxios
      .get(`/api/events/${id}`)
      .then((result) => {
        console.log(result.data);
        setEvents(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function deleteEvent(id) {
    const pass = window.prompt("삭제할 패스워드를 입력하세요");
    if (events.pass != pass) {
      return alert("패스워드가 일치하지 않습니다");
    }
    axios
      .delete(`/api/events/deleteEvent/${events.id}`)
      .then(() => {
        navigate("/events");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="eventdetail_wrap">
      <div className="eventdetail_btn_wrap">
        <button onClick={() => navigate(`/updateEvent/${events.id}`)}>
          수정
        </button>
        <button onClick={() => deleteEvent(events.id)}>삭제</button>
        <button onClick={() => navigate("/events")}>돌아가기</button>
      </div>

      <div className="eventdetail_content">
        {events.contentImages && events.contentImages.length > 0 ? (
          events.contentImages.map((image, index) => (
            <div key={index} className="eventdetail_contentdetail">
              <img src={image} alt={`Content Image ${index}`} />
            </div>
          ))
        ) : (
          <p>No content images available.</p>
        )}
      </div>


      {/* <a id="kakaotalk-sharing-btn" href="javascript:shareMessage()">
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </a> */}

      <div className="event_custom-button_wrap">
        <button class="event_custom-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 22 24"
          >
            <rect width="24" height="24" fill="white" />
            <path
              d="M7 14.5L12 9.5L17 14.5"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          이벤트 공유하기
        </button>
      </div>
    </div>
  );
}

export default EventDetail;
