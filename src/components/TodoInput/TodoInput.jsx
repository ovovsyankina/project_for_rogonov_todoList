import React from "react";
import { string, func } from "prop-types";
import styles from "./TodoInput.module.scss";

const TodoInput = ({
  value,
  onKeyDownAddNewTodo,
  onCheckAll,
  onChangeInput,
  onModalAddOpen,
}) => {
  return (
    <div className={styles.root}>
      <label className={styles.all_completed} onClick={onCheckAll} />

      <button className={styles.input_text} onClick={onModalAddOpen}>
        {" "}
        Добавить задачу
      </button>
      {/* <input
        type="text"
        value={value}
        className={styles.input_text}
        placeholder="What needs to be done?"
        onChange={onChangeInput}
        onKeyDown={onKeyDownAddNewTodo}
      /> */}
    </div>
  );
};

TodoInput.propTypes = {
  value: string,
  addNewTodo: func,
  setValue: func,
  onCheckAll: func,
};

export default TodoInput;
