import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
