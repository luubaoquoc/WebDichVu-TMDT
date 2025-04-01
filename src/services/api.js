import axios from "axios";

const API_URL = "http://localhost:3001/api/user"; // Đổi thành địa chỉ backend của bạn

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};