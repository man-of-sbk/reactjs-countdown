import React, { useState } from "react";

import CountDownBackground from "./CountDownBackground";
import CountDownControllers from "./CountDownControllers";
import TimeInput from "./TimeInputs";

import { defaultCountDownTime } from "./../constants/defaultCountDownTime";

const CountDownContainer = () => {
  const [initCountDownTime, setInitCountDownTime] = useState(
    defaultCountDownTime
  );
  const [countDownTime, setCountDownTime] = useState(defaultCountDownTime);
  const [isCountingDown, setIsCountingDown] = useState(false);

  return (
    <div className="count-down-container">
      <h2 className="title">Time Until My Next Break</h2>
      <TimeInput
        setCountDownTime={setCountDownTime}
        setInitCountDownTime={setInitCountDownTime}
        isCountingDown={isCountingDown}
      />
      <CountDownBackground countDownTime={countDownTime} />
      <CountDownControllers
        initCountDownTime={initCountDownTime}
        countDownTime={countDownTime}
        isCountingDown={isCountingDown}
        setCountDownTime={setCountDownTime}
        setIsCountingDown={setIsCountingDown}
      />
    </div>
  );
};

export default CountDownContainer;
