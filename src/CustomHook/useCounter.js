import React, { useState } from "react";

function useCounter(initialvalue, value) {
  const [count, setcount] = useState(initialvalue);

  const incrementHadler = () => {
    setcount((count) => count + value);
  };
  const decrementHadler = () => {
    setcount((count) => count - value);
  };
  const resetHadler = () => {
    setcount(initialvalue);
  };
  return [count, incrementHadler, decrementHadler, resetHadler];
}
export default useCounter;
