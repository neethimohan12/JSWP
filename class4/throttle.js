function throttle(func, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Example
let throttleCount = 0;
const logThrottle = () => console.log("Throttled count:", ++throttleCount);

const throttledLog = throttle(logThrottle, 1000);

setInterval(throttledLog, 300); // Fires every 300ms