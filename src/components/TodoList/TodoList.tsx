import { useSelector } from "react-redux";
import { MockInterface } from "../../interfaces/interfaces";

import { RootState } from "../../store";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  const displayTodos = todos.map((todo: MockInterface) => (
    <TodoItem key={todo.id} {...todo} />
  ));
  console.log(displayTodos);

  return (
    <div>{displayTodos.sort((a: any, b: any) => b.props.id - a.props.id)}</div>
  );
};

export default TodoList;
