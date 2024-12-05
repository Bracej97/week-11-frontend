import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mysite-bweo.onrender.com',
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        console.log(token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          console.log(config);
          return config;
    },
    (error) => Promise.reject(error)
);

export default api;
