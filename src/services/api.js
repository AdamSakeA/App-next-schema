import axios from "axios";
import ConfigUrl from "./config";

const Api = axios.create({
  baseURL: ConfigUrl.baseURL,
  headers: { "Content-Type": "application/json" },
});

export const getAllCategories = async () => {
  try {
    const response = await Api.get("/categories");
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};
