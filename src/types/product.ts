export type ProductColor = 'red' | 'green' | 'blue';

export interface Product {
  productName: string;
  price: number;
  total_count: number;
  color: ProductColor;
  createdAt: string; // '15:32:28'
  modifiedAt: string; // '16:10:07'
  sellable: boolean;
}

export interface SelectedProduct {
  productName: string;
  price: number;
  total_count: number;
  color: ProductColor;
  createAt: string; // 명세서의 'createAt' 필드
  modifiedAt: string;
  sellable: boolean;
}

export interface ColorCount {
  color: ProductColor;
  total_count: number;
}