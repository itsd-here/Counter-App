import React, { useState } from "react";

const Counter = () => {
  let [Count, setCount] = useState(0);

  let handleIncrement = () => {
    setCount(Count + 1);
  };
  let handleDecrement = () => {
    setCount(Count - 1);
  };
  let handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="CounterApp">
        <h1 className="parent">Counter Application</h1>
      </div>

      <div className="Counter">
        <h1>{Count}</h1>
      </div>

      <div className="buttons">
        <button className="increment" onClick={handleIncrement}>
          Increment
        </button>
        <button className="decrement" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
