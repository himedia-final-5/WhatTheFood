// import React, {useState, useEffect} from 'react'
import { useEffect, useState } from "react";
import "./EventTop.css";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Event() {
  const navigate = useNavigate();
  const [word, setWord] = useState(null);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {});

  return (
    <div className="eventBody">
      <div className="eventCenter">
        <br></br>
        <div id="event1">|Event|</div>
        <br />
        <div id="event2">이벤트</div>
        <br></br>
        {eventList.map((eventlist, idx) => {
          return <div className="eventlist" key={idx}></div>;
        })}
      </div>
    </div>
  );
}

export default Event;
