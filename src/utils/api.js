import axios from "axios";

// Create an instance of axios
const api = axios.create({
  baseURL: "https//node-casino.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
