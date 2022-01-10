import React from "react";
import "./componentCSS/Popup.css";
function Popups({ content, handleClose }) {
  //props handle-close content
  return (
    <div className="popup-background">
      <div className="popup">
        <div className="close-icon" onClick={handleClose}>
          X
        </div>
        <div className="popup-content">{content}</div>
      </div>
    </div>
  );
}

export default Popups;
