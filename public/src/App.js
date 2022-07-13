import "./App.css";
import { NavBar } from "./components/NavBar";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
function App() {
  console.log("jjjjj")
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/addTodo" element={<PrivateRoute><TodoInput /></PrivateRoute> }></Route>
        <Route path="/todoList" element={<TodoList />}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
