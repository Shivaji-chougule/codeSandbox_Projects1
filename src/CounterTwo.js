import React from "react";
import useCounter from "./CustomHook/useCounter";
function CounterTwo() {
  const [count, incrementHadler, decrementHadler, resetHadler] = useCounter(
    10,
    10
  );
  return (
    <div>
      <h2>CounterTwo:{count}</h2>
      <button onClick={incrementHadler}>increment</button>
      <button onClick={decrementHadler}>decrement</button>
      <button onClick={resetHadler}>reset</button>
    </div>
  );
}
export default CounterTwo;
