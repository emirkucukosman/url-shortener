import axios from 'axios'

const baseURL = "http://localhost:9090"

const api = axios.create({
    baseURL
})

api.interceptors.request.use((config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
})

api.interceptors.response.use((response) => response, (error) => {
    if (error.response) {
        return Promise.reject(error.response.data[0].msg)
    } else if (error.request) {
        return Promise.reject("Server could not respond")
    } else {
        return Promise.reject("Unexpected error has occured")
    }
})
export default api;