import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";
import { todosSelector, filterSelector } from "../../redux/selector";

const TodoListContainer = ({ onModalEditOpen }) => {
  const todos = useSelector(todosSelector);
  const filter = useSelector(filterSelector);

  const filterTodo = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.complete);
      case "completed":
        return todos.filter((todo) => todo.complete);
      default:
        return todos;
    }
  }, [filter, todos]);

  const counter = useMemo(() => {
    let index = 0;
    todos.map((todo) => (!todo.complete ? (index = index + 1) : index));
    return index;
  }, [todos]);

  const [isFilterDateDown, setFilterDateDown] = useState(true);

  const filterTodos = useMemo(() => {
    if (isFilterDateDown) {
      return [...filterTodo].sort((a, b) => (a.date < b.date ? 1 : -1));
    } else {
      return [...filterTodo].sort((a, b) => (a.date < b.date ? -1 : 1));
    }
  }, [filterTodo, isFilterDateDown]);
  const getOption = (e) => {
    const option = e.target.value;
    if (option === "dateDown") {
      return setFilterDateDown(true);
    } else if (option === "dateUp") {
      return setFilterDateDown(false);
    }
    console.log(option);
    return option;
  };

  return (
    <TodoList
      todos={filterTodos}
      filter={filter}
      counter={counter}
      sharedTodos={todos}
      onModalEditOpen={onModalEditOpen}
      getOption={getOption}
    />
  );
};

export default TodoListContainer;
