import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import jaxios from "../../util/jwtUtil";
import "../../style/Event.css";
import { useDispatch } from "react-redux";

function EventList() {
  const [events, setEvents] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [content, setContent] = useState([]);
  const [paging,setPaging] = useState({});

  const dispath = useDispatch();
  const navigate = useNavigate();

  useEffect(
    ()=>{
        jaxios.get(`/api/events`)
        .then((result)=>{setEvents(result.data.content);})
        .catch((err)=>{console.error(err)})
    },[]
  );

  return (
    <div className="event_wrap">
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} className="event_state_wrap">
            <span className="event_state_name">{event.title}</span>
            <span className="event_date">
              {event.startDate}&nbsp;&nbsp;{event.endDate}
            </span>
            <div className="event_imageUrl">{event.imageUrl}</div>
            <span className="event_content">{event.content}</span>
          </div>
        ))
      ) : (
        <div>No events found.</div>
      )}
    </div>
  );
}

export default EventList;
