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
export const clearErrorMessage = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERROR" });
};
export const setUserId = (userId) => (dispatch) => {
  dispatch({ type: "SET_USERID", payload: userId });
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
export const sendNutritionData = (nutritionData) => async (dispatch) => {
  try {
    const response = await api.sendNutritionData(nutritionData);
    dispatch({ type: "LOG_NUTRITION", payload: response.data });
  } catch (error) {
    window.console.error(error);
  }
};
export const getDailyNutrition = (userId) => async (dispatch) => {
  try {
    const response = await api.getDailyNutrition(userId);
    dispatch({ type: "GET_DAILY_NUTRITION", payload: response.data });
  } catch (error) {
    window.console.error(error);
  }
};
