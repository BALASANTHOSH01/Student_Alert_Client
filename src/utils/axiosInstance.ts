import axios from "axios";


const API_URL = "https://student-alert-server.onrender.com";

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export { API_URL, axiosInstance };
