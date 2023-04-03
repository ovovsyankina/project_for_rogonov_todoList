import React from "react";
import { object, func, bool, string } from "prop-types";
import styles from "./TodoItem.module.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const TodoItem = ({
  todo,
  onDelete,
  onCheck,
  onEditCurrentTodo,
  onClickOpenDialog,
  onCloseDialog,
  onCloseDialogYes,
  open,
}) => {
  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        className={styles.todo_checkbox}
        checked={todo.complete}
        onChange={onCheck}
        id={todo.id}
      />

      <label className={styles.label_textTask} htmlFor={todo.id} />

      <div className={styles.date}>{todo.date}</div>

      <div className={styles.text_task}>{todo.title}</div>

      <button
        onClick={onEditCurrentTodo}
        className={styles.edit_button}
      ></button>

      <button className={styles.todo_delete} onClick={onClickOpenDialog} />
      <Dialog
        open={open}
        onClose={onCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Хотите ли вы удалить задачу?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={onCloseDialogYes}>Да</Button>
          <Button onClick={onCloseDialog} autoFocus>
            Нет
          </Button>
        </DialogActions>
      </Dialog>
    </li>
  );
};

TodoItem.propTypes = {
  todo: object,
  onDelete: func,
  onCheck: func,
  editText: string,
  isEdit: bool,
  setEdit: func,
  onEditTodoItem: func,
  setEditText: func,
  onEditTodoItemEnter: func,
};

export default TodoItem;
