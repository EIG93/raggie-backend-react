import axios  from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
api.interceptors.request.use(
    config => {
        // 可以在这里添加 token 或其他头信息
        // const token = localStorage.getItem('token'); // 示例：从 localStorage 获取 token
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        console.log("Request made with", {
            url:config.url,
            params:config.params,
            data:config.data
        });
        
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// // 响应拦截器
api.interceptors.response.use(
    response => {
        console.log("response 返回结果", response.data);
        return response;
    },
    error => {
        // 可以在这里处理通用错误，例如未授权或超时
        // if (error.response.status === 401) {
        //     // 例如，跳转到登录页面
        //     window.location.href = '/login';
        // }

        console.log("response error", error);
        
        return { msg: "error"};
    }
);

export default api;
