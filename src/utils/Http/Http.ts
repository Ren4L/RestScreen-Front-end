import {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import axios from "axios";
import {getConfigFile} from "ts-loader/dist/config";

const api = axios.create({
    baseURL: "http://localhost:5454/api",
    withCredentials: true,
});

api.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

// api.interceptors.response.use((response:AxiosResponse)=>{
//
// })

export default api;