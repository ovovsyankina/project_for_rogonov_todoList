import { combineReducers } from "redux";
import tasks from "../reducer/tasks";
import filter from "../reducer/filter";
import currentTodo from "../reducer/currentTodo";

import snackBar from "../reducer/snackBar";

const rootReducer = combineReducers({ tasks, filter, currentTodo, snackBar });

export default rootReducer;
