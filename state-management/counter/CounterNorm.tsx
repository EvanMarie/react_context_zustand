// Reducer: a function that allows for centralization of state updates

import React, { useState } from "react";

const CounterNorm = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => setValue(value + 1)}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button onClick={() => setValue(0)} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default CounterNorm;
