import { useDispatch } from "react-redux";
import TimeAgo from "../../hooks/TimeAgo";
import { deleteTodo, updateTodo } from "../../features/todosSlice";
import { fetchTodos } from "../../features/todosSlice";

import { MockInterface } from "../../interfaces/interfaces";
import axios from "axios";

const TodoItem = ({ title, date, edit, isCompleted, id }: MockInterface) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteTodo(id));
    await dispatch(fetchTodos());
  };

  const handleComplete = async () => {
    const complete = { isCompleted: !isCompleted };
    await axios.put(
      `https://630df577b37c364eb70fbb2c.mockapi.io/api/v1/todos/${id}`,
      complete
    );
    await dispatch(fetchTodos());
  };

  const handleUpdate = async () => {
    const newData = { title: "hello world" };
    await dispatch(updateTodo(id, newData));
    await dispatch(fetchTodos());
  };

  return (
    <div style={{ color: isCompleted ? "red" : "black" }}>
      <h2>{title}</h2>
      <h3>{isCompleted ? "true" : "false"}</h3>
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleComplete}>complete</button>
      <button onClick={handleUpdate}>update</button>
      <TimeAgo timestamp={date} />
    </div>
  );
};

export default TodoItem;
