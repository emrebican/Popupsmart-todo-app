import { useSelector } from "react-redux";
import { RootState } from "../../store";

import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  const displayTodos = todos.map((todo: any) => (
    <div key={todo.id}>{todo.title}</div>
  ));
  return (
    <div>
      <TodoItem {...displayTodos} />
    </div>
  );
};

export default TodoList;
