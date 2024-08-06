import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import jaxios from "../../util/jwtUtil";
import "../../style/EventList.css";
import { useDispatch } from "react-redux";

function EventList() {
  const [events, setEvents] = useState([]);
  const [pageable, setPageable] = useState({number:0, last:false});//page시작과 끝
  const dispath = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    jaxios
      .get(`/api/events`)
      .then((result) => {
        setEvents(result.data.content);//content를 가져와서 저장
        setPageable(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(
      ()=>{
          window.addEventListener("scroll", handleScroll);
          return () => {
              window.removeEventListener("scroll", handleScroll);
          }
      }
  );

  const handleScroll=()=>{
      const scrollHeight = document.documentElement.scrollHeight - 10; // 스크롤이 가능한 크기
      const scrollTop = document.documentElement.scrollTop;  // 현재 위치
      const clientHeight = document.documentElement.clientHeight; // 내용물의 크기
      console.log(Number(pageable.number) + 1)
      if( scrollTop + clientHeight >= scrollHeight ) {
          onPageMove( Number(pageable.number) + 1 );
      }
  }

  function onEventView(id) {
    jaxios
      .get(`/api/events/getEvent/${id}`)
      .then(() => {
        navigate(`/events/${id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //무한스크롤
  function onPageMove(page) {
    console.log("onPageMove(", page, ")");
    axios
      .get(`/api/events`,{params:{pageNumber: page}})
      .then((result) => {
        //서버로 부터 페이지에 이어서 필요한 데이터를 전달 받고 기존 event 리스트에 추가함
        setEvents([...events, ...result.data.content]);
        setPageable(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="event_wrap">
      {events.length > 0 ? (
        events.map((event, index) => (
          <div
            key={index}
            className="event_state_wrap"
            onClick={() => {
              onEventView(event.id);
            }}
          >
            <div className="event_text_wrap">
              <span className="event_state_name">{event.title}</span>
              <span className="event_date">
                {event.startDate.slice(0, 10)}&nbsp;&nbsp;
                {event.endDate.slice(0, 10)}
              </span>
            </div>

            <div className="event_imageUrl">
              <img src={event.bannerImage}></img>
            </div>
          </div>
        ))
      ) : (
        <div>No events found.</div>
      )}
    </div>
  );
}

export default EventList;
