import React, { useReducer, useState } from "react";
import counterReducer from "./counterReducer";

const CounterWithReducer = () => {
  /* useReducer is a hook that allows for centralization of state updates
      it takes a reducer function and an initial state and returns an array:
     1. the current state
     2. a dispatch function that updates the state, dispatching an action */

  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        // dispatch an action to the reducer
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default CounterWithReducer;
