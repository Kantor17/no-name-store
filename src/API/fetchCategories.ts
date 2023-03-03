import { BASE_URL } from "./constants";

export default async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  return res.json();
}
