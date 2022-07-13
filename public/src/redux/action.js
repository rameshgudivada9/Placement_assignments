import axios from "axios";


export const ADDTODO = "ADDTODO";
export const SORTTODO = "SORTTODO";
export const FILTERTODO = "FILTERTODO";

export const AUTH= "AUTH";

export const authToggle = () => {
  return { type: AUTH };
};
export const filterTodo = (val) => {
  return { type: FILTERTODO, payload: val };
};
export const addTodo = (val) => {
  return { type: ADDTODO, payload: val };
};
export const sortTodo = (val) => {
  
  return { type:SORTTODO, payload: val };
};

export const postTodo = (val) => async (dispatch) => {
  axios
    .post(`http://localhost:8080/todo`, { ...val })
    .then(() =>  dispatch(getTodo()))
    .catch((error) => console.log(error));
};
export const getTodo = () => async (dispatch) => {
  axios
    .get(`http://localhost:8080/todo`)
    .then((res) => dispatch(addTodo(res.data)))
    .catch((error) => console.log(error));
};
export const deleteTodo = (val) => async (dispatch) => {
  axios
    .delete(`http://localhost:8080/todo/${val}`)
    .then(() => dispatch(getTodo()))
    .catch((error) => console.log(error));
};
