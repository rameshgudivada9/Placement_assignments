import { ADDTODO, AUTH, FILTERTODO, SORTTODO } from "./action";

const init = {
  todo: [],
  filter: "",
  auth:false
};
export const todoReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADDTODO:
      return { ...store, todo: [...payload] };
    case AUTH:
      return { ...store, auth:!store.auth };
    case FILTERTODO:
      return { ...store, filter: payload };
    case SORTTODO:
      return {
        ...store,
        todo: [...store.todo].sort((a, b) =>
          payload[1] === "asc"
            ? a[payload[0]] > b[payload[0]]
              ? 1
              : a[payload[0]] < b[payload[0]]
              ? -1
              : 0
            : a[payload[0]] < b[payload[0]]
            ? 1
            : a[payload[0]] > b[payload[0]]
            ? -1
            : 0
        ),
      };
    default:
      return store;
  }
};
