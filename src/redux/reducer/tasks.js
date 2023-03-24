import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_COMPLETED,
  EDIT_TODO_ITEM,
} from "../constant";

const defaultState = [];

const tasks = (state = defaultState, { id, type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          title: payload.title.trim().replace(/ /g, "\u00A0"),
          complete: payload.complete,
          description: payload.description,
          date: payload.date,
        },
      ];

    case DELETE_TODO:
      return [...state].filter((data) => data.id !== payload);

    case COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      );

    case CHECK_ALL_TODO:
      return state.some((element) => !element.complete)
        ? state.map((todo) => ({ ...todo, complete: (todo.complete = true) }))
        : state.map((todo) => ({
            ...todo,
            complete: (todo.complete = false),
          }));

    case CLEAR_COMPLETED:
      return state.filter((elem) => !elem.complete);

    case EDIT_TODO_ITEM:
      return [...state].map((data) => {
        if (data.id === payload.id) {
          return payload;
        }
        return data;
      });

    default:
      return state;
  }
};

export default tasks;
