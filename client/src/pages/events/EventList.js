import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../../stores";
import axios from "axios";
import jaxios from "../../utils/jwtUtil";
import "./EventList.css";
import "../../styles/Reset.css";

function EventList() {
  const loginUser = useSelector((state) => state.user);
  const [events, setEvents] = useState([]);
  const [pageable, setPageable] = useState({ number: 0, last: false }); //page시작과 끝
  const navigate = useNavigate();

  useEffect(() => {
    // 이벤트 목록이 비어있으면 첫번째 페이지 데이터 요청
    if (events.length === 0) {
      onPageMove(0);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - 10; // 스크롤이 가능한 크기
    const scrollTop = document.documentElement.scrollTop; // 현재 위치
    const clientHeight = document.documentElement.clientHeight; // 내용물의 크기
    console.log(Number(pageable.number) + 1);
    if (scrollTop + clientHeight >= scrollHeight) {
      onPageMove(Number(pageable.number) + 1);
    }
  };

  function onEventView(id) {
    navigate(`/events/${id}`);
  }

  //무한스크롤
  function onPageMove(page) {
    // 마지막 페이지거나, 이미 다음 페이지 요청이 시작된 경우 무시
    if (pageable.last || pageable.fecthed) {
      return;
    }

    console.log("onPageMove(", page, ")");

    // 페이지 요청이 시작 되었다는 플래그 설정
    pageable.fecthed = true;
    jaxios
      .get(`/api/events`, { params: { pageNumber: page } })
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
    <div className="event_banner_wrap">
      <button
        onClick={() => {
          navigate("/createEventBanner");
        }}
      >
        게시글쓰기
      </button>
      &nbsp;&nbsp;&nbsp;
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
                {event.endDate && event.endDate.slice(0, 10)}
              </span>
            </div>

            <div className="event_imageUrl">
              <img src={event.bannerImage} alt="event_bannerImage"></img>
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
