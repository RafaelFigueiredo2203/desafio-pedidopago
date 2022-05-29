import axios from "axios";
const api = axios.create({
  baseURL: "https://pp-api-desafio.herokuapp.com",
});
export default api;