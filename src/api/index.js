import axios from "axios";

const url = "http://localhost:8000/";

export const tryPost = (data) => axios.post(`${url}try`, data);
