import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodo } from "../redux/action";
import "./TodoInput.css";
export const TodoInput = () => {
  const [todo, setTodo] = useState({ title: "", priority: "", status: false });
  const dispatch = useDispatch();
  function fieldHandler(event) {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  }
  function formHandler(e) {
    e.preventDefault()
    dispatch(postTodo(todo));
  }
  // console.log(todo);
  return (
    <div>
      <form className="todo-form" onSubmit={formHandler}>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={fieldHandler}
          placeholder="Please Enter Title"
        />
        <div className="radio-btn">
          <span> Priority :</span>
          <input
            type="radio"
            name="priority"
            onChange={fieldHandler}
            value="high"
          />{" "}
          <span> High </span>
          <input
            type="radio"
            name="priority"
            onChange={fieldHandler}
            value="medium"
          />
          <span> Medium</span>
          <input
            type="radio"
            name="priority"
            onChange={fieldHandler}
            value="low"
          />
          <span> Low</span>
        </div>
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};
