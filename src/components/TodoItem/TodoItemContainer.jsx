import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { checkTodo, deleteTodo, getCurrentTodo } from "../../redux/action";
import TodoItem from "./TodoItem";
import { array } from "prop-types";

const TodoItemContainer = ({ todo, onModalEditOpen }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(deleteTodo(todo.id));
  }, [dispatch, todo.id]);

  const handleCheck = useCallback(() => {
    dispatch(checkTodo(todo.id));
  }, [dispatch, todo.id]);

  const handleEditCurrentTodo = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(getCurrentTodo(todo));
      onModalEditOpen();
    },
    [dispatch, todo, onModalEditOpen]
  );

  const [open, setOpen] = useState(false);
  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialogYes = () => {
    setOpen(false);
    handleDelete();
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <TodoItem
      todo={todo}
      key={todo.id}
      onDelete={handleDelete}
      onCheck={handleCheck}
      onEditCurrentTodo={handleEditCurrentTodo}
      onClickOpenDialog={handleClickOpenDialog}
      onCloseDialog={handleCloseDialog}
      open={open}
      onCloseDialogYes={handleCloseDialogYes}
    />
  );
};

TodoItemContainer.propTypes = {
  todos: array,
};

export default TodoItemContainer;
