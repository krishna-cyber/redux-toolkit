import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const resetAll = () => {
    dispatch(reset());
    setIncrementAmount(0);
  };
  return (
    <>
      <section>{count}</section>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}>
          +
        </button>
        <button
          aria-label='decrement'
          onClick={() => {
            dispatch(decrement());
          }}>
          -
        </button>

        <button aria-label='reset' onClick={() => dispatch(reset())}>
          Reset
        </button>

        <div>
          <input
            type='text'
            value={incrementAmount}
            onChange={(e) => {
              setIncrementAmount(e.target.value);
            }}
          />
          <button
            onClick={() => {
              dispatch(incrementByAmount(Number(incrementAmount)));
            }}>
            Increment
          </button>
          <button onClick={resetAll}>Reset All</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
