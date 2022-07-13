import { useDispatch } from "react-redux";
import { filterTodo, sortTodo } from "../redux/action";
import "./TodoSortFilter.css";
export const TodoSortFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className="todo-sort-filter">
      <input type="text" placeholder="Please Enter Title" onChange={(e)=>{ dispatch(filterTodo(e.target.value))}} />

      <select
        id="sort"
        onChange={(e) => {
          let val = document.getElementById("acs-des").value;

          dispatch(sortTodo([e.target.value, val]));
        }}
      >
        {/* <option value="id">id</option> */}
        <option value="status">status</option>
        <option value="priority">priority</option>
        <option value="title">title</option>
      </select>
      <select
        id="acs-des"
        onChange={(e) => {
          let val = document.getElementById("sort").value;
          dispatch(sortTodo([val, e.target.value]));
        }}
      >
        <option value="asc">ascending</option>
        <option value="des"> descending</option>
      </select>
    </div>
  );
};
