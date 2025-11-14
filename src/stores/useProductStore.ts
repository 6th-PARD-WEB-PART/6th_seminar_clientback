import { ProductColorRequest } from "@/types/product";
import { create } from "zustand";

// CHALLENGE1 TODO: 가장 최근에 상세 페이지를 방문한 상품의 정보를 저장하는 상태 만들기 (Recently Selected Product)
// -> 어느 타입을 지정해야 할 지 잘 생각해보기

export type GuideState = {
  // 상태 (State)
  // products: Product[];
  colorQuantities?: ProductColorRequest[]; // 색상 별 재고 현황 상태 추가하기

  // 액션 (Actions)
  // setProducts: (data: Product[]) => void;
  // colorQuantity?: (data: ColorQuantity[]) => void;
};

export const useProductStore = create<GuideState>((set) => ({
  // 전체 GET 임시 데이터
  // products: [
  //   {id: "1", n: "셔츠", p: 20000, q: 10, c: "red", createdAt: new Date(), modifiedAt: new Date(), s: true},
  //   {id: "2", n: "셔츠", p: 20000, q: 3, c: "green", createdAt: new Date(), modifiedAt: new Date(), s: true},
  //   {id: "3", n: "셔츠", p: 20000, q: 0, c: "blue", createdAt: new Date(), modifiedAt: new Date(), s: false},
  //   {id: "4", n: "필통", p: 5000, q: 3, c: "green", createdAt: new Date(), modifiedAt: new Date(), s: true},
  //   {id: "5", n: "청바지", p: 30000, q: 0, c: "blue", createdAt: new Date(), modifiedAt: new Date(), s: false},
  // ],

  // 색상 별 전체 상품 재고 현황 임시 데이터
  // colorQuantities: [
  //   { c: "red", q: 10 },
  //   { c: "green", q: 6 },
  //   { c: "blue", q: 0 },
  // ],

  // setProducts: (data) => set({ products: data }),
}));

export default useProductStore;
