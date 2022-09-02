import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addNewTodo } from "../../features/todosSlice";
import { todoTitlePass } from "../../utilities/userNamePass";
import { showToast } from "../../utilities/showToast";
import { TodoInterface } from "../../interfaces/interfaces";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  const TODO_DATE = new Date().toISOString();
  const alert = "Need to type more than 3 letters!";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const content: TodoInterface = {
      title: inputValue,
      edit: false,
      date: TODO_DATE,
    };

    todoTitlePass(inputValue)
      ? dispatch(addNewTodo(content))
      : showToast(alert);

    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something to do..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
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
    </>
  );
};

export default TodoAdd;
