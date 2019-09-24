import React, { Component } from "react";

import Controller from "./Controller";

// import { defaultCountDownTime } from "./../constants/defaultCountDownTime";
import { formatTime } from "./../utils/countDownMinute/formatTime";

class CountDownControllers extends Component {
  clearCountDownInterv = () => {
    clearInterval(this.countDownInterv);
  };

  onTimeChange = (newMinutes, newSeconds) => {
    this.props.setCountDownTime({
      minutes: formatTime(newMinutes),
      seconds: formatTime(newSeconds)
    });
  };

  onCountDownFinish = () => {
    this.clearCountDownInterv();
    this.props.setIsCountingDown(false);
    this.props.setCountDownTime(this.props.initCountDownTime);
  };

  onCountDownStart = () => {
    this.props.setIsCountingDown(true);

    const { minutes, seconds } = this.props.countDownTime;
    let currentMinutes = parseInt(minutes);
    let currentSeconds = parseInt(seconds);

    console.log(currentMinutes, currentSeconds);

    this.countDownInterv = setInterval(() => {
      currentSeconds--;

      if (currentSeconds < 0) {
        if (currentMinutes > 0) {
          currentSeconds = 59;
          currentMinutes--;
        } else {
          this.onCountDownFinish();
          return;
        }
      }

      this.onTimeChange(currentMinutes, currentSeconds);
    }, 1000);
  };

  onResetCountDown = () => {
    this.clearCountDownInterv();
    this.props.setIsCountingDown(false);
    this.props.setCountDownTime(this.props.initCountDownTime);
  };

  onPauseCountDown = () => {
    this.clearCountDownInterv();
    this.props.setIsCountingDown(false);
  };

  render() {
    const { onCountDownStart, onResetCountDown, onPauseCountDown } = this;
    const { isCountingDown } = this.props;

    return (
      <div className="count-down-controllers row">
        <Controller
          iconName={isCountingDown ? "pause" : "play"}
          onClick={isCountingDown ? onPauseCountDown : onCountDownStart}
        />
        <Controller iconName={"redo"} onClick={onResetCountDown} />
      </div>
    );
  }
}

export default CountDownControllers;
