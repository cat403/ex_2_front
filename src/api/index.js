import axios from "axios";

const url = "http://localhost:8000/";

export const tryPost = (data) => axios.post(`${url}try`, data);
export const sendSignup = (userInfo) =>
  axios.post(`${url}login/new-user`, { ...userInfo, action: "signup" });
export const sendSignin = (userInfo) =>
  axios.post(`${url}login/existing-user`, { ...userInfo });
export const checkUserAvailability = (info) =>
  axios.post(`${url}login/new-user`, { ...info, action: "check availability" });
export const sendNutritionData = (nutritionData) =>
  axios.post(
    `${url}nutrition`,
    { ...nutritionData },
    {
      headers: { Authorization: localStorage.getItem("jwt") },
    }
  );
export const getDailyNutrition = (userId) =>
  axios.get(`${url}nutrition/${userId}`, {
    headers: { Authorization: localStorage.getItem("jwt") },
  });
export const deleteMeal = (userId, mealId) =>
  axios.delete(`${url}nutrition/${userId}?meal=${mealId}`, {
    headers: { Authorization: localStorage.getItem("jwt") },
  });
export const sendExercise = (userId, exercise) => {
  axios.post(`${url}fitness/${userId}`, exercise, {
    headers: { Authorization: localStorage.getItem("jwt") },
  });
};
export const sendCaloriesBurned = (userId, caloriesBurned) =>
  axios.post(`${url}fitness/${userId}/calories`, caloriesBurned, {
    headers: { Authorization: localStorage.getItem("jwt") },
  });
export const deleteExercise = (userId, exerciseId) =>
  axios.delete(`${url}fitness/${userId}?exercise=${exerciseId}`, {
    headers: { Authorization: localStorage.getItem("jwt") },
  });
export const getExercises = (userId) =>
  axios.get(`${url}fitness/${userId}`, {
    headers: { Authorization: localStorage.getItem("jwt") },
  });
export const getCalories = (userId) =>
  axios.get(`${url}fitness/${userId}/calories`, {
    headers: { Authorization: localStorage.getItem("jwt") },
  });
