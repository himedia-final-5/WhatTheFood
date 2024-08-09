import React from "react";
import "./PopUp.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          닫기
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
