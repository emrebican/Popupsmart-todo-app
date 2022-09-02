import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { ListWrapper } from "./styled";

import TodoItem from "../TodoItem/TodoItem";
import { MockInterface } from "../../interfaces/interfaces";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  const displayTodos = todos.map((todo: MockInterface) => (
    <TodoItem key={todo.id} {...todo} />
  ));

  return (
    <ListWrapper>
      {displayTodos.sort((a: any, b: any) => b.props.id - a.props.id)}
    </ListWrapper>
  );
};

export default TodoList;
