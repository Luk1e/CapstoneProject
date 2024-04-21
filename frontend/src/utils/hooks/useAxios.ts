import axios from "axios";
import { refresh } from "../../toolkit/auth/authSlice";
// Export store injection function,
// Store is injected in index.js
let store: any;
export const injectStore = (_store: any) => {
  store = _store;
};

// Export axios without cookies for public pages
export const useAxios = axios.create({
  headers: { "Content-Type": "application/json" },
});

// Export authorized axios with cookies for auth pages
export const useAuthAxios = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// If unauthorized run logout
useAuthAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(refresh());
    } else {
      return Promise.reject(error);
    }
  }
);
