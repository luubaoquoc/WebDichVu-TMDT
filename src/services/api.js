import axios from "axios";

const API_URL = "http://localhost:3001/api/user"; // Đổi thành địa chỉ backend của bạn
const API_URL_SERVICE = "http://localhost:3001/api/service"; // Đổi thành địa chỉ backend của bạn

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response;
  } catch (error) {
    // Trả về response lỗi để frontend tự xử lý
    return error.response;
  }
};



export const createService = async (serviceData) => {
  return axios.post(`${API_URL_SERVICE}/orderservice`, serviceData);
};

