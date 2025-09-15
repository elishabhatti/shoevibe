import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL || "",
  headers: { "Content-Type": "application/json" },
});

export const renderProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data;
};
