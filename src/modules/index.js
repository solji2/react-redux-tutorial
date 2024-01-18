import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReduccer = combineReducers({
  counter,
  todos,
});

export default rootReduccer;
