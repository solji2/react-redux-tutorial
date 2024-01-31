import React from "react";
import Todos from "../components/Todos";
import { changeinput, insert, toggle, remove } from "../modules/todos"; //todos모듈에서 작성했던 액션함수와 상태안에 있던 값을 컴포넌트의 props로 전달받음
import { connect } from "react-redux";

const TodosContainer = ({
  input,
  todos,
  changeinput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeinput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  //비구조화 할당을 통해 todos분리하여 state,todos,input 대신 todos,input을 사용
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeinput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
