import TimeAgo from "../../hooks/TimeAgo";
import { MockInterface } from "../../interfaces/interfaces";

const TodoItem = ({ title, date, edit, isCompleted }: MockInterface) => {
  return (
    <div>
      <h2>{title}</h2>
      <TimeAgo timestamp={date} />
    </div>
  );
};

export default TodoItem;
