import { Food } from "@/types";
import { BASE_URL } from "@config";
import axios from "axios";

interface FoodFormData {
  id?: string;
  name: string;
  categoryId: string;
  numberInStock: number;
  price: number;
}

const API_ENDPOINT = `${BASE_URL}/api/foods`;
//const CREDENTIALS = "?username=mohammed&accessCode=qPwtoO&auth=true";

function foodUrl(id?: string) {
  if (id) return `${API_ENDPOINT}/${id}`;
  return `${API_ENDPOINT}`;
}

export function getFoods() {
  return axios.get<Food[]>(foodUrl());
}

export function getFood(id: string) {
  return axios.get<Food>(foodUrl(id));
}

export function saveFood(food: FoodFormData) {
  if (food.id) return axios.put<Food>(foodUrl(food.id), food);

  return axios.post<Food>(foodUrl(), food);
}

export function deleteFood(id: string) {
  return axios.delete<Food>(foodUrl(id));
}
