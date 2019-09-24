import React from "react";

import Timer from "./Timer";

const TimeContainer = ({ title, num }) => {
  return (
    <div className="time-container col row">
      <Timer num={num[0]} />
      <Timer num={num[1]} />
      <div className="time-container-title">{title}</div>
    </div>
  );
};

export default TimeContainer;
