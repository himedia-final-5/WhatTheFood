import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./EventList.css";
import { axios } from "utils";
import { usePageResponse } from "hooks";

/** @type EventSummary[] */
const DEFAULT_CONTENT = [];
const SCROLL_DATA_COUNT = 4;

function EventList() {
  const navigate = useNavigate();
  const { content, pagination, setPageResponse } =
    usePageResponse(DEFAULT_CONTENT);
  const [accumulatedContent, setAccumulatedContent] = useState(DEFAULT_CONTENT);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => setAccumulatedContent((prevPosts) => [...prevPosts, ...content]),
    [content],
  );

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - 10; // 스크롤이 가능한 크기
    const scrollTop = document.documentElement.scrollTop; // 현재 위치
    const clientHeight = document.documentElement.clientHeight; // 내용물의 크기

    if (scrollTop + clientHeight >= scrollHeight) {
      loadPage(Number(pagination.page) + 1);
    }
  };

  function onEventView(id) {
    navigate(`/events/${id}`);
  }

  //무한스크롤
  function loadPage(page) {
    // 마지막 페이지거나, 이미 다음 페이지 요청이 시작된 경우 무시
    if (pagination.last || isLoading) {
      return;
    }

    // 페이지 요청
    setIsLoading(true);
    axios
      .get(`/api/events`, { params: { page, size: SCROLL_DATA_COUNT } })
      .then((result) => setPageResponse(result.data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    // 이벤트 목록이 비어있으면 첫번째 페이지 데이터 요청
    if (content.length === 0) {
      loadPage(0);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

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
      {accumulatedContent.length > 0 ? (
        accumulatedContent.map((event, index) => (
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
