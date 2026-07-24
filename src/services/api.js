import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach JWT token
api.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token");

    // DEBUG
    console.log("JWT Token:", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // DEBUG
    console.log("Authorization Header:", config.headers.Authorization);

    return config;

  },
  (error) => Promise.reject(error)
);

export default api;