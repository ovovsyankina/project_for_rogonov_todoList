import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/action";
import TodoInput from "./TodoInput";

const TodoInputContainer = ({ onModalAddOpen }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addNewTodo = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (value.trim().length !== 0) {
          dispatch(
            addTodo(Date.now(), value.trim().replace(/ /g, "\u00A0"), false)
          );
          setValue("");
        } else {
          setValue("");
        }
      }
    },
    [dispatch, value]
  );
  const handleChangeInput = (e) => setValue(e.target.value);

  const handleKeyDownAddNewTodo = (e) => addNewTodo(e);

  return (
    <TodoInput
      value={value}
      addNewTodo={addNewTodo}
      onChangeInput={handleChangeInput}
      onKeyDownAddNewTodo={handleKeyDownAddNewTodo}
      onModalAddOpen={onModalAddOpen}
    />
  );
};

export default TodoInputContainer;
