import { ACTIVE_FILTER, ALL_FILTER, COMPLETED_FILTER } from "../constant";

const defaultState = "all";

const filter = (state = defaultState, { type }) => {
  switch (type) {
    case ACTIVE_FILTER:
      return (state = "active");
    case COMPLETED_FILTER:
      return (state = "completed");
    case ALL_FILTER:
      return (state = "all");

    default:
      return state;
  }
};

export default filter;
