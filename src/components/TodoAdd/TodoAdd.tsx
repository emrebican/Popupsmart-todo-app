import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todosSlice";


const TodoAdd = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /***************** dispatch - if it's min 3 caracter *****************/
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type something to do..."
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoAdd;
