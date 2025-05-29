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

export const getUserDetails = (id) => {
  const token = JSON.parse(localStorage.getItem("user"))?.access_token;
  return axios.get(
    `${process.env.REACT_APP_API_BACKEND_URL}/user/get-details/${id}`,
    token
      ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      : undefined
  );
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

export const blockUser = async (userId, isBlocked) => {
  const token = JSON.parse(localStorage.getItem("user"))?.access_token;

  return axios.patch(
    `${process.env.REACT_APP_API_BACKEND_URL}/user/block/${userId}`,
    { isBlocked },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export const createService = async (serviceData) => {
  const token = JSON.parse(localStorage.getItem("user"))?.access_token;
  console.log("token:", token);

  return axios.post(
    `${process.env.REACT_APP_API_BACKEND_URL}/service/orderservice`,
    serviceData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
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


export const getProducts = async (limit = 12, page = 0) => {
  const response = await axios.get(`${process.env.REACT_APP_API_BACKEND_URL}/product/all-product?limit=${limit}&page=${page}`);
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_BACKEND_URL}/product/create-product`,
    productData
  );
  return response.data;
};

export const getMyOrders = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.access_token;

  return axios.get(`${process.env.REACT_APP_API_BACKEND_URL}/service/orderservice/my-orders`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
