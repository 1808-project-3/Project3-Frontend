import axios from "axios";
import { environment } from "src/environment";

export const apiClient = axios.create({
    baseURL: environment.context,
    timeout: 10000
});


apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt');

    if (token != null) {
        config.headers.JWT = token;
    }
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});


// apiClient.get
