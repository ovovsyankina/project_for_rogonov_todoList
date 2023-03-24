import { CURRENT_TODO } from "../constant";

const defaultState = {};

const currentTodo = (state = defaultState, { type, payload }) => {
  switch (type) {
    case CURRENT_TODO:
      return {
        id: payload.id,
        title: payload.title,
        complete: payload.complete,
        description: payload.description,
        date: payload.date,
      };

    default:
      return state;
  }
};

export default currentTodo;
