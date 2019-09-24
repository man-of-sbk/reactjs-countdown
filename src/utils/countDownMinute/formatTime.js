export const formatTime = arg => {
  if (typeof arg === "string") {
    if (arg.length === 2) {
      return arg;
    } else if (arg.length > 2) {
      const argInNum = parseInt(arg);

      return argInNum >= 0 && argInNum < 10
        ? "0" + argInNum
        : argInNum.toString();
    }
  }

  return arg >= 0 && arg < 10 ? "0" + arg : arg.toString();
};
