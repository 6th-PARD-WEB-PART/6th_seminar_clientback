// TODO: 서버 파디와 함께 결정한 API 명세서에 맞게 타입 수정하기

export interface Product {
  id: string;
  n: string;
  p: number;
  q: number;
  c: string;
  createdAt: Date;
  modifiedAt: Date;
  s: boolean;
}

export interface SelectedProduct {
  // CHALLENGE TODO: 가장 최근에 상세 페이지를 방문한 상태의 타입 정의하기
  something: string;
}

export interface ColorCount {
  c: string;
  q: number;
}
