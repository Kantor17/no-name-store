export type Categories = "mclothing" | "wclothing" | "jewelry" | "electronics";

export enum SortTypes {
  POPULARITY = "popularity",
  PRICE_ASCENDING = "price-asc",
  PRICE_DESCENDING = "price-desc",
}

export interface Product {
  category: Categories;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

export interface ProductsState {
  products: Product[];
  sortType: SortTypes;
}
