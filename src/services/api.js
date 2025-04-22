import axios from "axios";


export const registerUser = async (userData) => {
  return axios.post(`${process.env.REACT_APP_API_BACKEND_URL}/user/register`, userData);
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_BACKEND_URL}/user/login`, userData);
    return response;
  } catch (error) {
    // Trả về response lỗi để frontend tự xử lý
    return error.response;
  }
};

export const updateUser = async (user_id, userData) => {
  return axios.put(`${process.env.REACT_APP_API_BACKEND_URL}/user/update-user/${user_id}`,
    userData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const getAllUser = async () => {
  const token = JSON.parse(localStorage.getItem("user"))?.access_token;

  console.log(token)
  return axios.get(
    `${process.env.REACT_APP_API_BACKEND_URL}/user/getAllUser`,
    {
      headers: {
        Authorization: `Bearer ${token}`, // chuẩn header
      },
    }
  );
};


export const createService = async (serviceData) => {
  return axios.post(`${process.env.REACT_APP_API_BACKEND_URL}/service/orderservice`, serviceData);
};

export const getServiceOrders = async () => {
  return axios.get(`${process.env.REACT_APP_API_BACKEND_URL}/service/get-orders-service`);
};

export const confirmServiceOrder = (orderId) => {
  const token = JSON.parse(localStorage.getItem("user"))?.access_token;

  return axios.patch(
    `${process.env.REACT_APP_API_BACKEND_URL}/service/orderservice/confirm/${orderId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getMyOrders = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.access_token;

  return axios.get(`${process.env.REACT_APP_API_BACKEND_URL}/service/orderservice/my-orders`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
