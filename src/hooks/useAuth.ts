'use client';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// import Cookies from "js-cookie";
import { API_BASE_URL } from "@/lib/api";

// Define API URLs
const BASE_URL = `${API_BASE_URL}/api/auth/web`;
const LOGIN_URL = `${BASE_URL}/sign-in`;

console.log(LOGIN_URL)

const REFRESH_URL = `${BASE_URL}/token-refresh`;
const LOGOUT_URL = `${BASE_URL}/logout`;

// Axios instance
const axiosInstance = axios.create({
  withCredentials: true, // Ensure cookies (refresh token) are sent
});

// Axios interceptor to refresh token automatically
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await axiosInstance.post(REFRESH_URL);
        return axiosInstance(originalRequest); // Retry failed request
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Hook for authentication
export const useAuth = () => {
  const queryClient = useQueryClient();

  // Login Mutation
  const loginMutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const response = await axiosInstance.post(LOGIN_URL, credentials);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
    },
  });

  // Logout Mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await axiosInstance.post(LOGOUT_URL);
      queryClient.setQueryData(["user"], null);
    },
  });

  return {
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    isLoading: loginMutation.isPending || logoutMutation.isPending,
  };
};
