import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./EventDetail.css";
import "../../styles/Reset.css";
import jaxios from "../../utils/jwtUtil";

<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>;

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
      <button onClick={() => navigate(`/updateEvent/${events.id}`)}>
        수정
      </button>
      <button onClick={() => deleteEvent(events.id)}>삭제</button>
      <button onClick={() => navigate("/events")}>돌아가기</button>
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
      
    </div>
  );
}

export default EventDetail;
