import { SET_SNACKBAR_TEXT } from "../constant";

const snackBar = (state = "", { type, payload }) => {
  switch (type) {
    case SET_SNACKBAR_TEXT:
      return payload;

    default:
      return state;
  }
};

export default snackBar;
