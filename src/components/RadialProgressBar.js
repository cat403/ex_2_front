import React from "react";
import "./componentCSS/RadialProgressBar.css";
function RadialProgressBar({ numerator, denominator, title }) {
  let color;
  if (numerator / denominator > 1) {
    color = "red";
  } else {
    color = "green";
  }
  const percentColor = (numerator / denominator) * 100;
  return (
    <div className="radial-progress-bar-container">
      <div className="radial-progress-bar-border">
        <div className="radial-progress-bar-title">
          <h3>{title}</h3>
        </div>
        <div
          className="radial-progress-bar"
          style={{
            background: `linear-gradient(white ${
              100 - percentColor
            }%, ${color} 0% ${percentColor}%)`,
          }}
        ></div>
        <br />
        <p>{`${numerator} Calories`}</p>
      </div>
    </div>
  );
}

export default RadialProgressBar;
