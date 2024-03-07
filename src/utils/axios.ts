import axios from "axios";
import env from "./env";

const API = env.base_url;


const instance = axios.create({
  baseURL: API,
});

instance.interceptors.request.use(
  async (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default instance;
