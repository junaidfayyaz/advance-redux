import React, { useReducer } from "react";

const UseReducer = () => {
  let initialstate = 0;
  const reducer = ( state,action) => {
    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return initialstate;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch("INCREMENT")}>INCREMENT</button>
      <button onClick={() => dispatch("DECREMENT")}>DECREMENT</button>
      <button onClick={() => dispatch("RESET")}>RESET</button>
    </>
  );
};

export default UseReducer;
