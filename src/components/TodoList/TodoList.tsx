import { useSelector } from "react-redux";
import { MockInterface } from "../../interfaces/interfaces";

import { RootState } from "../../store";

import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  const displayTodos = todos.map((todo: MockInterface) => (
    <TodoItem key={todo.id} {...todo} />
  ));

  return <div>{displayTodos}</div>;
};

export default TodoList;
