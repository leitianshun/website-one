import axios from "axios";
import { clientId, clientSecret } from "@/common/setting";
import { options } from "@/http/config.js";
import { Base64 } from "@/utils/base64.js";



const service = axios.create(options);
service.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Basic " + Base64.encode(clientId + ":" + clientSecret);
    if (process.client) {
      // 客户端下，请求进度条开始
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    if (process.client) {
      // 停止loading
    }
    // 若有数据返回则通过
    if (response.data.access_token || response.data.key) {
      return response.data;
    }
    // 服务端返回的状态码不等于200，则reject()
    if (response.data.code !== 200) {
      return Promise.reject(response);
    }
    return response.data;
  },
  (error) => {
    if (process.client) {
      // 停止loading
    }
    return Promise.reject(error.response); // 返回接口返回的错误信息
  }
);

export default service;
