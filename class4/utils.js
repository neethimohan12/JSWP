export function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Throttle: limit function call rate
export function throttle(func, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Memoize: cache function results
export function memoize(func) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  };
}

// Curry: transform function to be curried
export function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return (...next) => curried(...args, ...next);
  };
}

// Compose: compose functions from right to left
export function compose(...funcs) {
  return function (input) {
    return funcs.reduceRight((acc, fn) => fn(acc), input);
  };
}
