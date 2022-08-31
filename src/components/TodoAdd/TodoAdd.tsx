import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addTodo } from "../../features/todosSlice";

import { Flip } from "react-toastify";
import { todoTitlePass } from "../../utilities/userNamePass";
import { showToast } from "../../utilities/showToast";

const TodoAdd = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    todoTitlePass(inputValue) ? dispatch(addTodo(inputValue)) : showToast();

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
        toastStyle={{backgroundColor: "#212121", color: "#eee"}}
      />
    </>
  );
};

export default TodoAdd;
