import axios from "axios";
import ConfigUrl from "./config";

const Api = axios.create({
  baseURL: ConfigUrl.baseURL,
  headers: { "Content-Type": "application/json" },
});

export const getAllCategories = async (endpoint = "categories") => {
  try {
    const response = await Api.get(endpoint);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await Api.get(`categories/${category}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
