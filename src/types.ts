export type CategoryTypes =
  | "men's clothing"
  | "women's clothing"
  | "jewelery"
  | "electronics";

export enum SortTypes {
  POPULARITY = "popularity",
  PRICE_ASCENDING = "price-asc",
  PRICE_DESCENDING = "price-desc",
}

export interface Product {
  category: CategoryTypes;
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

export interface ModalInfo {
  error?: Error;
  message?: string;
  closeCb?: () => void;
  buttons?: {
    title: string;
    action: () => void;
  }[];
}
