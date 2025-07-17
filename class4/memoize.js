function memoize(func) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("From cache:", key);
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  };
}

// Example
const slowAdd = (a, b) => {
  console.log("Calculating...");
  return a + b;
};

const memoizedAdd = memoize(slowAdd);

console.log(memoizedAdd(2, 3)); // "Calculating..." → 5
console.log(memoizedAdd(2, 3)); // "From cache..." → 5