import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { ToastContainer, Flip } from "react-toastify";

import { themeToggle } from "./features/todosSlice";
import UserValidation from "./components/UserValidation/UserValidation";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";
import { fetchTodos } from "./features/todosSlice";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.todos.user.login);
  const todos = useSelector((state: RootState) => state.todos.todos);
  const themeColor = useSelector((state: RootState) => state.todos.themeColor);
  console.log(todos);
  console.log(themeColor);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <React.Fragment>
      <button onClick={() => dispatch(themeToggle())}>theme</button>
      {login ? (
        <div>
          <TodoAdd />
          <TodoList />
        </div>
      ) : (
        <UserValidation />
      )}
      <ToastContainer
        position="top-right"
        transition={Flip}
        autoClose={1500}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        toastStyle={{ backgroundColor: "#212121", color: "#eee" }}
      />
    </React.Fragment>
  );
}

export default App;
