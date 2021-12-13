import axios from "axios";

const url = "http://localhost:8000/";

export const tryPost = (data) => axios.post(`${url}try`, data);
export const sendSignup = (userInfo) =>
  axios.post(`${url}login/new-user`, { ...userInfo, action: "signup" });
export const checkUserAvailability = (info) =>
  axios.post(`${url}login/new-user`, { ...info, action: "check availability" });
export const sendNutritionData = (nutritionData) =>
  axios.post(`${url}nutrition`, { ...nutritionData });
