import { Product } from "../types";
import { BASE_URL } from "./constants";

export default async function getProducts(
  category?: string,
  queries?: {
    sort?: 'asc' | 'desc';
    limit?: number;
  }
): Promise<Product[]> {
  console.log(`${BASE_URL}/products
  ${category ? `/category/${category}` : ""}
  ${queries ? `?${Object.entries(queries).forEach(entry => entry.join('='))}` : ''}`);

  const res = await fetch(`${BASE_URL}/products
  ${category ? `/category/${category}` : ""}
  ${queries ? `?${Object.entries(queries).forEach(entry => entry.join('='))}` : ''}
  `);
  return res.json();
}