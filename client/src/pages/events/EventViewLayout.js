import React from "react";
import "./EventTop.css";

function EventView() {
  return (
    <div className="eventBody">
      <div className="eventCenter">
        <br></br>
        <div id="event1">|event|</div>
        <br />
        <div id="event2">이벤트</div>
        <br></br>
        <hr></hr>
        <div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
        </div>
        <div>목록으로</div>
      </div>
    </div>
  );
}

export default EventView;
