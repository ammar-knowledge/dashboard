import axios from "axios";
import { GetLocal } from "./localStorage";


const API_URL = 'https://dev-api.upbrainery.com'
const axiosHttp = axios.create({
  baseURL: `${API_URL}`,
});

axiosHttp.interceptors.request.use(
  (config) => {
    const token = GetLocal('user-token')
    return {
      ...config,
      headers: {
        ...(token !== null && { Authorization: `${token}` }),
        ...config.headers,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosHttp;