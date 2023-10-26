import axios from "axios";

export const key = "b248e3f4a05c16ab3c59b34a14693cfe";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
