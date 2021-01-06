import React from "react";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { onDecrease, onIncrease } from "../modules/counter";

export default function CounterContainer() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const Increase = () => dispatch(onIncrease());
  const Decrease = () => dispatch(onDecrease());
  return (
    <Counter number={number} onIncrease={Increase} onDecrease={Decrease} />
  );
}
