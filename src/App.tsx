import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { ToastContainer, Flip } from "react-toastify";
import { BsFillSunFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./styled";

import { themeToggle, fetchTodos } from "./features/todosSlice";
import UserValidation from "./components/UserValidation/UserValidation";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.todos.user.login);
  const themeColor = useSelector((state: RootState) => state.todos.themeColor);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <S.AppWrapper themeProp={themeColor}>
      <S.Button onClick={() => dispatch(themeToggle())} themeProp={themeColor}>
        {themeColor ? <BsFillSunFill /> : <RiMoonClearFill />}
      </S.Button>
      {login ? (
        <S.ContentWrapper>
          <TodoAdd />
          <TodoList />
        </S.ContentWrapper>
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
        toastStyle={{ backgroundColor: "#212121", color: "#eee" }}
      />
    </S.AppWrapper>
  );
}

export default App;
