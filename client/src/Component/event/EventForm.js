import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import jaxios from '../../util/jwtUtil';
import '../../style/EventList.css';

const EventForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
      if (id) {
          jaxios.get(`/api/events/${id}`)
              .then(response => {
                  const event = response.data;
                  setTitle(event.title);
                  setDescription(event.description);
                  setDate(event.date.split('T')[0]);
              })
              .catch(error => console.error('Error fetching event:', error));
      }
  }, [id]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const event = { title, description, date };

      try {
          if (id) {
              await jaxios.post(`/api/events/${id}`, event);
          } else {
              await jaxios.post('/api/events/', event);
          }
          navigate('/events');
      } catch (error) {
          console.error('Error saving event:', error);
      }
  };

  return (
      <div className="container">
          <h2>{id ? 'Edit Event' : 'Create Event'}</h2>
          <form className="event-form" onSubmit={handleSubmit}>
              <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
              />
              <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
              />
              <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
              />
              <button type="submit">Save</button>
          </form>
      </div>
  );
};

export default EventForm;
