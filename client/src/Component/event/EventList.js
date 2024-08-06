import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import jaxios from "../../util/jwtUtil";
import "../../style/Event.css";
import { useDispatch } from "react-redux";

function EventList() {
  const [id, setId] = useState();
  const [events, setEvents] = useState({ title: "", startDate: "", endDate: "", imageUrl: "", content: "" });
  const [imageUrl, setImageUrl] = useState([]);
  const [content, setContent] = useState([]);

  const dispath = useDispatch();
  const navigate = useNavigate();

  useEffect(
    ()=>{
        jaxios.get(`/api/events/get/${id}`)
        .then((result)=>{setId(result.data);})
        .catch((err)=>{console.error(err)})
    },[id]
  );

  return (
    <div className="event_wrap">
      <div className="event_state_wrap">
        <span className="event_state_name">{events.title}</span>
        <span className="event_date">
          {events.startDate}&nbsp;&nbsp;{events.endDate}
        </span>
      </div>
      <div className="event_imageUrl">{events.imageUrl}</div>
      <span className="event_content">{events.content}</span>
    </div>
  );
}

export default EventList;
