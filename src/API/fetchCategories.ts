import { CategoryTypes } from "../types";
import { BASE_URL } from "./constants";

export default async function fetchCategories(): Promise<CategoryTypes[]> {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if (!res.ok) throw new Error("Server problems. Please try again later");
  return res.json();
}
