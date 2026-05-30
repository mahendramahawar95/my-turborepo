import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // useful for cookies/JWT
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // token attach here if needed
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // global error handling
    return Promise.reject(error);
  }
);

export default api;