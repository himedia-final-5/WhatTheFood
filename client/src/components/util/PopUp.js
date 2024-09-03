import React, { useState, useEffect } from "react";
import "./PopUp.css";

function Popup({ trigger, setTrigger, children }) {
  const [showPopup, setShowPopup] = useState(trigger);

  useEffect(() => {
    if (trigger) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [trigger]);

  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
        if (setTrigger) {
          setTrigger(false);
        }
      }, 1000); // Hide after 1 second
    }

    return () => clearTimeout(timer); // Cleanup the timer on unmount or if `showPopup` changes
  }, [showPopup, setTrigger]);

  return showPopup ? (
    <div className="popup">
      <div className="popup-inner">{children}</div>
    </div>
  ) : null;
}

export default Popup;
