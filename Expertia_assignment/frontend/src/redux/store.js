import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { JobReducer } from "./JobReducer/JobReducer";

const rootReducer = combineReducers({
  product: JobReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));