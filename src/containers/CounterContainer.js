import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);
  const onIncrease = useCallback(() => {
    debugger;
    dispatch(increase());
  }, [dispatch]);
  const onDecrease = useCallback(() => {
    debugger;
    dispatch(decrease());
  }, [dispatch]);

  return (
    <div>
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export default CounterContainer;
