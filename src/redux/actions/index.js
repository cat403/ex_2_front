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
//utilities
export const clearErrorMessage = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERROR" });
};
export const setUserId = (userId) => (dispatch) => {
  dispatch({ type: "SET_USERID", payload: userId });
};
//poplate user state
export const getUserInfo = (userId) => async (dispatch) => {
  try {
    const response = await api.getUserInfo(userId);
    dispatch({ type: "GET_USER", payload: response.data });
  } catch (error) {
    window.console.error(error);
  }
};
//auth
export const sendSignin = (userInfo) => async (dispatch) => {
  const clearUser = () => {
    localStorage.clear();
    dispatch({ type: "LOG_OUT" });
  };
  try {
    const twoHours = 7200000;
    const response = await api.sendSignin(userInfo);
    localStorage.setItem("jwt", response.data.token);
    localStorage.setItem("id", response.data.user._id);
    dispatch({ type: "SIGNIN", payload: response.data });
    setTimeout(clearUser, twoHours);
  } catch (error) {
    window.console.log(error);
  }
};
export const sendSignup = (userInfo) => async (dispatch) => {
  try {
    const response = await api.sendSignup(userInfo);
    const clearUser = () => {
      localStorage.clear();
      dispatch({ type: "LOG_OUT" });
    };
    dispatch({ type: "REGISTER", payload: response.data });
    localStorage.setItem("jwt", response.data.token);
    localStorage.setItem("id", response.data.user._id);
    const twoHours = 7200000;
    setTimeout(clearUser, twoHours);
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
export const logOut = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: "LOG_OUT" });
};
//nutrition
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
export const deleteMeal = (userId, mealId) => async (dispatch) => {
  try {
    const response = await api.deleteMeal(userId, mealId);
    dispatch({ type: "DELETE_MEAL", payload: response.data });
  } catch (error) {
    window.console.log(error);
  }
};
//exercise
export const sendExercise = (userId, exercise) => async (dispatch) => {
  try {
    const response = await api.sendExercise(userId, exercise);
    dispatch({ type: "LOG_EXERCISE", payload: response.data });
  } catch (error) {
    window.console.log(error);
  }
};
export const sendCaloriesBurned = (userId, caloriesBurned) => async (
  dispatch
) => {
  try {
    const response = await api.sendCaloriesBurned(userId, caloriesBurned);
    dispatch({ type: "LOG_CALORIES", payload: response.data });
  } catch (error) {
    window.console.log(error);
  }
};

export const deleteExercise = (userId, exerciseId) => async (dispatch) => {
  try {
    const response = await api.deleteExercise(userId, exerciseId);
    dispatch({ type: "DELETE_EXERCISE", payload: response.data });
  } catch (error) {
    window.console.log(error);
  }
};
export const getExercises = (userId) => async (dispatch) => {
  try {
    const response = await api.getExercises(userId);
    dispatch({ type: "GET_EXERCISES", payload: response.data });
  } catch (error) {
    window.console.log(error);
  }
};
//calories
export const getCalories = (userId) => async (dispatch) => {
  try {
    const response = await api.getCalories(userId);
    dispatch({ type: "GET_CALORIES", payload: response.data });
  } catch (error) {
    window.console.log(error);
  }
};
