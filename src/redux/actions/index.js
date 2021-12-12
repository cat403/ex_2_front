import * as api from "../../api";

export const console = (payload) => (dispatch) => {
  dispatch({ type: "CONSOLE", payload });
};
export const tryPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.tryPost(post);

    dispatch({ type: "TRYPOST", payload: data });
  } catch (error) {
    window.console.error(error);
  }
};
export const sendSignup = (userInfo) => async (dispatch) => {
  try {
    const response = await api.sendSignup(userInfo);
    dispatch({ type: "REGISTER", payload: response.data });
  } catch (error) {
    window.console.error(error);
  }
};
export const checkUserAvailability = (info) => async (dispatch) => {
  try {
    const response = await api.checkUserAvailability(info);
    dispatch({ type: "CHECK_DB_AVAILABILITY", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
