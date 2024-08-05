import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jaxios from '../../util/jwtUtil';
import '../../style/Event.css';

    const EventList = () => {
      const [events, setEvents] = useState([]);
      const navigate = useNavigate();
  
      useEffect(() => {
          jaxios.get('/api/events')
              .then(response => setEvents(response.data.content))
              .catch(error => console.error('Error fetching events:', error));
      }, []);
  
      return (
          <div className="container">
              <h2>Event List</h2>
              <ul className="event-list">
                  {events.map(event => (
                      <li key={event.id} className="event-list-item" onClick={() => navigate(`/events/${event.id}`)}>
                          {event.title}
                      </li>
                  ))}
              </ul>
          </div>
      );
  };


export default EventList;
