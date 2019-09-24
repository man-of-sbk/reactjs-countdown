import React from "react";

import TimeContainer from "./TimerContainer";

const CountDownBackground = ({ countDownTime }) => {
  console.log(countDownTime.seconds);
  return (
    <div className="count-down-background row">
      <TimeContainer num={countDownTime.minutes} title={"MINUTES"} />
      <div className="timer-divider-container row">
        <div className="timer-divider"></div>
        <div className="timer-divider"></div>
      </div>
      <TimeContainer num={countDownTime.seconds} title={"SECONDS"} />
    </div>
  );
};

export default CountDownBackground;
