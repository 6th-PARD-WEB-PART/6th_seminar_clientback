// TODO: 서버 파디와 함께 결정한 API 명세서에 맞게 Request/Response 타입 정의하기

// 전역상태관리로 임시 데이터 불러올 때 사용하는 타입 - TODO: 안 쓸 거면 지워버리기
export interface Product {
  id: string;
  productName: string;
  price: number;
  total_count: number;
  color: string;
  createdAt: Date;
  modifiedAt: Date;
  sellable: boolean;
}

export interface ProductResponse {
  readOneProductDtoList: Product[];
}

export interface ProductRequest {
  productName: string;
  price: number;
  total_count: number;
  color: string;
}

export interface SelectedProduct {
  // CHALLENGE1 TODO: 가장 최근에 상세 페이지를 방문한 상태의 타입 정의하기
  something: string;
}

export interface ColorQuantity {
  c: string;
  q: number;
}