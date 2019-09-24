import React, { useState } from "react";

import { formatTime } from "../utils/countDownMinute/formatTime";

function TimeInput({ isCountingDown, setCountDownTime, setInitCountDownTime }) {
  const [inputVals, setInputVals] = useState({
    minutes: { val: 0, error: undefined },
    seconds: { val: 0, error: undefined }
  });

  const onInputChange = e => {
    let { name, value } = e.target;
    const newInputVals = { ...inputVals };
    const newInputValsOfThisInput = { ...newInputVals[name] };
    newInputVals[name] = newInputValsOfThisInput;

    const newInputValAtName = newInputVals[name];
    const trimedInputVal = value.toString().trim();
    const newStateWithInputValOnly = {};

    if (parseInt(value) > 59) {
      value = 59;
      newInputValAtName.error = "Input value is too hight";
    } else if (parseInt(value) < 0) {
      value = 0;
      newInputValAtName.error = "Input value is too low";
    } else if (trimedInputVal === "") {
      newInputValAtName.error = "Input value is required";
    } else {
      if (newInputValAtName.error !== undefined) {
        newInputValAtName.error = undefined;
      }
    }

    newInputValAtName.val = value;
    Object.keys(newInputVals).forEach(key => {
      // *** following inline-condition is ued to determine if the current value return ""(empty) then
      // ***** it will return "00"
      newStateWithInputValOnly[key] =
        name === key && trimedInputVal === ""
          ? "00"
          : formatTime(newInputVals[key].val);
    });

    setInputVals(newInputVals);
    setCountDownTime(newStateWithInputValOnly);
    setInitCountDownTime(newStateWithInputValOnly);
  };

  return (
    <div className={`row time-inputs-container ${isCountingDown && "d-none"}`}>
      <form className="row" action="#" method="POST">
        <div className="col time-inpupt-group">
          <input
            type="number"
            name="minutes"
            value={inputVals["minutes"].val}
            onChange={onInputChange}
          />
          <div className="error">
            {inputVals["minutes"].error ? inputVals["minutes"].error : " "}
          </div>
        </div>
        <div className="col time-inpupt-group">
          <input
            type="number"
            name="seconds"
            value={inputVals["seconds"].val}
            onChange={onInputChange}
          />
          <div className="error">
            {inputVals["seconds"].error ? inputVals["seconds"].error : " "}
          </div>
        </div>
      </form>
    </div>
  );
}

export default TimeInput;
