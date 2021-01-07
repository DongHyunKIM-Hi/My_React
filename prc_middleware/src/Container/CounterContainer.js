import React from "react";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAsync,
  increaseAsync,
  onDecrease,
  onIncrease,
} from "../modules/counter";

export default function CounterContainer() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const Increase = () => dispatch(increaseAsync());
  const Decrease = () => dispatch(decreaseAsync());
  return (
    <Counter number={number} onIncrease={Increase} onDecrease={Decrease} />
  );
}
