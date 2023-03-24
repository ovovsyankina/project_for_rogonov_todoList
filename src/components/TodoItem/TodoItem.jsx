import React from "react";
import { object, func, bool, string } from "prop-types";
import styles from "./TodoItem.module.scss";

const TodoItem = ({ todo, onDelete, onCheck, onEditCurrentTodo }) => {
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
      <button className={styles.todo_delete} onClick={onDelete} />
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
