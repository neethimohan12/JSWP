import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    const newCount = count - 1;
    setCount(newCount < 0 ? 0 : newCount); 
  };

  const reset = () => {
    setCount(0);
  };

  const double = () => {
    setCount(count * 2);
  };

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button onClick={decrease}>-1</button>
      <button onClick={increase}>+1</button>
      <button onClick={double}>Double</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;
