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
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.todos.user.login);
  const themeColor = useSelector((state: RootState) => state.todos.themeColor);
  const userName = useSelector((state: RootState) => state.todos.user.name);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("Todo_Theme", JSON.stringify(themeColor));
  }, [themeColor]);

  return (
    <S.AppWrapper themeProp={themeColor}>
      <S.Button onClick={() => dispatch(themeToggle())} themeProp={themeColor}>
        {themeColor ? <BsFillSunFill /> : <RiMoonClearFill />}
      </S.Button>
      {login ? (
        <S.ContentWrapper>
          <S.Title themeProp={themeColor}>{userName}'s Todo List</S.Title>
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
        toastStyle={{
          backgroundColor: themeColor ? "#fafafa" : "#c62828",
          color: themeColor ? "#212121" : "#fafafa",
        }}
      />
      <Footer />
    </S.AppWrapper>
  );
}

export default App;
