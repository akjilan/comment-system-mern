import API from "./axiosClient";

export const loginRequest = (data) => API.post("/auth/login", data);
export const registerRequest = (data) => API.post("/auth/register", data);
export const getMe = () => API.get("/me");
