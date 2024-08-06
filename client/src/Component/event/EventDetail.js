import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../style/EventDetail.css';
import jaxios from '../../util/jwtUtil';

function EventDetail(){
    const navigate = useNavigate();
    const [content, setContent] = useState("");
    const [events, setEvents] = useState([]);
    const {id} = useParams();

    return (
        <div className="event_wrap">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div key={index} className="event_state_wrap">
                <div className="event_text_wrap">
                  <span className="event_state_name">{event.title}</span>
                  <span className="event_date">
                    {event.startDate.slice(0, 10)}&nbsp;&nbsp;
                    {event.endDate.slice(0, 10)}
                  </span>
                </div>
    
                <div className="event_imageUrl">
                  <img src={event.imageUrl}></img>
                </div>
                <span className="event_content">{event.content}</span>
              </div>
            ))
          ) : (
            <div>No events found.</div>
          )}
        </div>
      );
}


export default EventDetail;
