import { Product } from "../types";
import { BASE_URL } from "./constants";

export default async function fetchProduct(id: number | string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if(!res.ok) throw new Error("Can't find the product.");
  return res.json();
};