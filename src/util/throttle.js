export default () => {
  let throttleCheck;

  return {
    throttle(callback, milliseconds) {
      if (!throttleCheck) {
        throttleCheck = setTimeout(() => {
          callback();
          throttleCheck = false;
        }, milliseconds);
      }
    },
  };
};
