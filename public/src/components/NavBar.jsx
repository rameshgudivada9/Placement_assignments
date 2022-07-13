import { Buttom } from "./Buttom";
import "./NavBar.css";
import { useContext } from "react";
// import { authToggle } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Authcontext } from "./contextAPI";
export const NavBar = () => {
  const { auth, authToggle } = useContext(Authcontext);
  // const auth = useSelector((store) => store.todo.auth);
  const nav = useNavigate();
  const dispatch = useDispatch();
  console.log(auth);
  return (
    <div className="todo-nav-bar">
      <Buttom props={{ link: "/todoList", btn: "Todo List" }} />
      <Buttom props={{ link: "/addTodo", btn: "Add Todo" }} />
      <button
        className="nav-btn1"
        onClick={() => {
          // dispatch(authToggle());
          authToggle()
          console.log("ll");
          // nav(`${auth ? "/login" : "/logout"}`)

          if (!auth) {
            nav(-2, { replace: false });
          }
        }}
      >{`${auth ? "Logout" : "Login"}`}</button>
    </div>
  );
};
// {`${auth ? "Logout" : "Login"}`}
// {
//   // /* <Navigate to={`${auth ? "/logout" : "/login"}`} />; */
// }
// dispatch(authToggle())
