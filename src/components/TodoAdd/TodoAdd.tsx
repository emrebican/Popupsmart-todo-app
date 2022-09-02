import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import { addNewTodo } from "../../features/todosSlice";
import { todoTitlePass } from "../../utilities/userNamePass";
import { showToast } from "../../utilities/showToast";
import { TodoInterface } from "../../interfaces/interfaces";
import { ALERT_3_LETTER, TODO_DATE } from "../constants/constant";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const content: TodoInterface = {
      title: inputValue,
      edit: false,
      date: TODO_DATE,
    };

    todoTitlePass(inputValue)
      ? dispatch(addNewTodo(content))
      : showToast(ALERT_3_LETTER);

    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type something to do..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoAdd;
