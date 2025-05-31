export type ProductCategory = 'Fruits' | 'Drinks' | 'Electronics' | 'Other';

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: ProductCategory;
  price: number;
  stock: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFilters {
  search?: string;
  category?: ProductCategory;
  sortBy?: 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';
  page: number;
  limit: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
} 