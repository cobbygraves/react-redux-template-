import { SHOWALERT } from "./Actions";

export const showAlert = (show, color, title, message) => {
  return (dispatch) =>
    dispatch({
      type: SHOWALERT,
      payload: {
        show,
        color,
        title,
        message,
      },
    });
};
