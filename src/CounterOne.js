import React from "react";
import useCounter from "./CustomHook/useCounter";

function CounterOne() {
  const [count, incrementHadler, decrementHadler, resetHadler] = useCounter(
    10,
    5
  );
  return (
    <div>
      <h2>CounterOne:{count}</h2>
      <button onClick={incrementHadler}>increment</button>
      <button onClick={decrementHadler}>decrement</button>
      <button onClick={resetHadler}>reset</button>
    </div>
  );
}
export default CounterOne;
