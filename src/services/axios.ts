import axios from "axios";
import * as model from "../models/model";

const AxiosService = {
  postMethod: (url: string, data: any, headers: any = false) => {
    return axios.post(url, data, headers);
  },

  getMethod: (url: string, headers: any = false) => {
    return axios.get(url, headers);
  },

  putMethod: (url: string, data: any, headers: any = false) => {
    return axios.put(url, data, headers);
  },
  deleteMethod: (url: string, headers: any = false) => {
    return axios.delete(url, headers);
  },
};

export default AxiosService;
