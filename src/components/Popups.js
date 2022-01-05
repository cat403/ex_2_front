import React from "react";

function Popups({ content, handleClose }) {
  //props handle-close content
  return (
    <div className="popup-background">
      <div className="popup">
        <span className="close-icon" onClick={handleClose}>
          X
        </span>
        <div className="popup-content">{content}</div>
      </div>
    </div>
  );
}

export default Popups;
