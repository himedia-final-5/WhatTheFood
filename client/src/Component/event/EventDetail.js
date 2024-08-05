import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../../style/Event.css';
import jaxios from '../../util/jwtUtil';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
      jaxios.get(`/api/events/${id}`)
          .then(response => setEvent(response.data))
          .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  const handleDelete = async () => {
      try {
          await jaxios.delete(`/api/events/${id}`);
          navigate('/events');
      } catch (error) {
          console.error('Error deleting event:', error);
      }
  };

  return (
      <div className="container">
          {event && (
              <>
                  <div className="actions">
                      <button className="edit" onClick={() => navigate(`/events/edit/${id}`)}>Edit</button>
                      <button className="delete" onClick={handleDelete}>Delete</button>
                  </div>
                  <div className="event-detail">
                      <h2>{event.title}</h2>
                      <p>{event.description}</p>
                      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                  </div>
              </>
          )}
      </div>
  );
};

export default EventDetail;
