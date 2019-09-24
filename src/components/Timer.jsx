import React from "react";

const Timer = ({ num }) => {
  return (
    <div className="timer-container col">
      <p className="timer">{num}</p>
    </div>
  );
};

export default Timer;
