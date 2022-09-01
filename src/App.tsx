import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

import UserValidation from "./components/UserValidation/UserValidation";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";
import { fetchTodos } from "./features/todosSlice";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.todos.user.login);
  const name = useSelector((state: RootState) => state.todos.user.name);
  const todos = useSelector((state: RootState) => state.todos.todos);
  console.log("login: ", login);
  console.log("name: ", name);
  console.log(todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <React.Fragment>
      {login ? (
        <div>
          <TodoAdd />
          <TodoList />
        </div>
      ) : (
        <UserValidation />
      )}
    </React.Fragment>
  );
}

export default App;
