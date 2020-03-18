import { combineReducers } from "redux";

import { TodoReducers } from "./todos";
import { DescriptionReducers } from "./description";

export default combineReducers({
  todos: TodoReducers,
  description: DescriptionReducers
});
