import { BASE_URL } from "@config";
import { Category } from "@types";
import axios from "axios";

export function getCategories() {
  return axios.get<Category[]>(`${BASE_URL}/api/categories`);
}
