import React, { useMemo } from "react";
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

  return (
    <TodoList
      todos={filterTodo}
      filter={filter}
      counter={counter}
      sharedTodos={todos}
      onModalEditOpen={onModalEditOpen}
    />
  );
};

export default TodoListContainer;
