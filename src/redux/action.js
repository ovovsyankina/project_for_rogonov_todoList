import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_COMPLETED,
  COMPLETED_FILTER,
  ACTIVE_FILTER,
  ALL_FILTER,
  EDIT_TODO_ITEM,
  CURRENT_TODO,
  SET_SNACKBAR_TEXT,
} from "./constant";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const checkTodo = (id) => ({
  type: COMPLETE_TODO,
  id,
});

export const checkAllTodo = () => ({
  type: CHECK_ALL_TODO,
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO_ITEM,
  payload,
});

export const completedFilter = () => ({
  type: COMPLETED_FILTER,
});

export const activeFilter = () => ({
  type: ACTIVE_FILTER,
});

export const allFilter = () => ({
  type: ALL_FILTER,
});

export const getCurrentTodo = (payload) => ({
  type: CURRENT_TODO,
  payload,
});

export const setSnackBar = (payload) => ({
  type: SET_SNACKBAR_TEXT,
  payload,
});
