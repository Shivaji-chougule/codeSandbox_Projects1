import React from "react";
import useCounter from "./CustomHook/useCounter";
function CounterThree() {
  const [count, incrementHadler, decrementHadler, resetHadler] = useCounter(
    25,
    25
  );
  return (
    <div>
      <h2>CounterThree:{count}</h2>
      <button onClick={incrementHadler}>increment</button>
      <button onClick={decrementHadler}>decrement</button>
      <button onClick={resetHadler}>resetbutton</button>
    </div>
  );
}
export default CounterThree;
