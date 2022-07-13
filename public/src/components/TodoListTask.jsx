import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/action";
import "./TodoListTask.css";

export const TodoListTask = ({ props }) => {
    const dispatch = useDispatch()
   
    const { title, id, status, priority } = props.ele;
   
  return (
    <tr className="todo-list-task" key={id}>
      <td>{props.ind+1}</td>
      <td>{title}</td>
      <td>{priority}</td>
      <td>{status ? "Done" : "Not Done"}</td>
      <td><button onClick={()=>{
          dispatch(deleteTodo(id))
      }}>Delete</button></td>
    </tr>
  );
};
