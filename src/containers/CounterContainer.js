import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <div>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    </div>
  );
};
//state를 파라미터로 받아오며, 이 값은 현재 스토어가 지나고 있는 상태를 가리킨다.
const mapStateToProps = (state) => ({
  number: state.counter.number,
});
//store 내장 함수 dispatch를 파라미터로 받아온다.
const mapDispatchToProps = (dispatch) => ({
  //임시 함수
  increase: () => {
    console.log("increase");
    dispatch(increase());
  },
  decrease: () => {
    console.log("decrease");
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
