import "./TodoList.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodo } from "../redux/action";
import { TodoListTask } from "./TodoListTask";
import { TodoSortFilter } from "./TodoSortFilter";
export const TodoList = () => {
  const todoData = useSelector((store) => store.todo.todo);
  const filter = useSelector((store) => store.todo.filter);
  const dispatch = useDispatch();
  //   console.log(filter);
  useEffect(() => {
    dispatch(getTodo());
  }, []);
  return (
    <div className="todo-list">
      <TodoSortFilter />
      <table>
        <tbody>
          {todoData
            .filter((e) => e.title.includes(filter))
            .map((ele, ind) => (
              <TodoListTask props={{ ele, ind }} key={ind} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
