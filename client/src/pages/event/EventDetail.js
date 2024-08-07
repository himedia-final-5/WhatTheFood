import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./EventDetail.css";
import "../../styles/Reset.css";
import jaxios from "../../utils/jwtUtil";

function EventDetail() {
  const navigate = useNavigate();
  const [event, setEvents] = useState({
    startDate: "",
    endDate: "",
  });
  const { id } = useParams();

  useEffect(() => {
    jaxios
      .get(`/api/events/${id}`)
      .then((result) => {
        console.log(result.data);
        setEvents(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="eventdetail_wrap">
          <div className="eventdetail_content">
            {event.contentImages && event.contentImages.length > 0 ? (
              event.contentImages.map((image, index) => (
                <div key={index} className="eventdetail_contentdetail">
                  <img src={image} alt={`Content Image ${index}`} />
                </div>
              ))
            ) : (
              <p>No content images available.</p>
            )}
          </div>
        </div>
  );
}

export default EventDetail;
