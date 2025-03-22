import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

console.log(API_BASE_URL);
const api = axios.create({
  baseURL: API_BASE_URL,
});

export { api, API_BASE_URL };
