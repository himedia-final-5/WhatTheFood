import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import jaxios from "../../util/jwtUtil";
import "../../style/EventList.css";
import { useDispatch } from "react-redux";

function EventList() {
  const [events, setEvents] = useState([]);
  const [paging, setPaging] = useState({});
  const [beginend, setBeginend] = useState([]);
  const dispath = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    jaxios
      .get(`/api/events`)
      .then((result) => {
        setEvents(result.data.content);
        setPaging(result.data.paging);
        const pageArr = [];
        for (
          let i = result.data.paging.beginPage;
          i <= result.data.paging.endPage;
          i++
        ) {
          pageArr.push(i);
        }
        setBeginend([...pageArr]);
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
      console.log(Number(paging.page) + 1)
      if( scrollTop + clientHeight >= scrollHeight ) {
          onPageMove( Number(paging.page) + 1 );
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

  function onPageMove(page) {
    //무한스크롤
    console.log("onPageMove(", page, ")");
    axios
      .get(`/api/getEventList/${page}`)
      .then((result) => {
        setPaging(result.data.paging);
        let ev = [];
        ev = [...events];
        ev = [...ev, ...result.data.events];
        setEvents([...ev]);
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

      <div id="paging" style={{ textAlign: "center", padding: "10px" }}>
        {paging.prev ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              onPageMove(paging.beginPage - 1);
            }}
          >
            {" "}
            ◀{" "}
          </span>
        ) : (
          <span></span>
        )}
        {beginend ? (
          beginend.map((page, idx) => {
            return (
              <span
                style={{ cursor: "pointer" }}
                key={idx}
                onClick={() => {
                  onPageMove(page);
                }}
              >
                &nbsp;{page}&nbsp;
              </span>
            );
          })
        ) : (
          <></>
        )}
        {paging.next ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              onPageMove(paging.endPage + 1);
            }}
          >
            &nbsp;▶&nbsp;
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default EventList;
