import { api } from "./axios";

api.interceptors.request.use((config) => {
    return config;
});
