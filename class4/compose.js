function compose(...funcs) {
  return function (input) {
    return funcs.reduceRight((acc, fn) => fn(acc), input);
  };
}

// Example
const double = x => x * 2;
const square = x => x * x;

const composed = compose(square, double); // square(double(x))

console.log(composed(5)); // square(10) → 100
