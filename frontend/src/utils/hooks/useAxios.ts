import axios from "axios";
import { refresh } from "../../toolkit/auth/authSlice";
// Export store injection function,
// Store is injected in index.js
let store: any;
export const injectStore = (_store: any) => {
  store = _store;
};

// const BACKEND_URL = "https://api.bestproject.buzz";

// Export axios without cookies for public pages
export const useAxios = axios.create({
  // baseURL: BACKEND_URL,
  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },
});

// Export authorized axios with cookies for auth pages
export const useAuthAxios = axios.create({
  // baseURL: BACKEND_URL,
  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },
});

// If unauthorized send refresh token request
useAuthAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 &&
      document.cookie.includes("isUserLogged=")
    ) {
      store.dispatch(refresh());
    } else {
      return Promise.reject(error);
    }
  }
);

// Export custom axios for files
// cookies included
export const useAuthFileAxios = axios.create({
  // baseURL: BACKEND_URL,
  withCredentials: true,

  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// If unauthorized send refresh token request
useAuthFileAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 &&
      document.cookie.includes("isUserLogged=")
    ) {
      store.dispatch(refresh());
    } else {
      return Promise.reject(error);
    }
  }
);
