import { Product } from "../types";
import { BASE_URL } from "./constants";

export default async function getProducts(
  category?: string,
  queries?: {
    sort?: "asc" | "desc";
    limit?: number;
  }
): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products${
    category ? `/category/${category}` : ""
  }${
    queries
      ? `?${Object.entries(queries).forEach((entry) => entry.join("="))}`
      : ""
  }
  `);
  if (!res.ok) throw new Error("Server problems. Please try again later");
  return res.json();
}
