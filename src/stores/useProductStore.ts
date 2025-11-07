import { ColorCount, Product, SelectedProduct } from '@/types/product';
import { create } from 'zustand';

// Zustand 스토어가 가질 상태(state)와 상태를 변경할 함수(actions)의 타입 정의
export type GuideState = {
  // 상태 (State)
  products: Product[];
  selectedProduct: SelectedProduct | null;
  colorCounts: ColorCount[];
  
  // 액션 (Actions)
  setProducts: (data: Product[]) => void;
  setSelectedProduct: (data: SelectedProduct) => void;
  setColorCounts: (data: ColorCount[]) => void;
  clearSelectedProduct: () => void;
};

// TODO: (Zustand) create<GuideState>를 사용하여 타입이 적용된 스토어 생성
export const useProductStore = create<GuideState>((set) => ({
  products: [],
  selectedProduct: null,
  colorCounts: [],
  
  // TODO: (Zustand) API 응답(data)으로 상태를 업데이트하는 함수들
  setProducts: (data) => set({ products: data }),
  setSelectedProduct: (data) => set({ selectedProduct: data }),
  setColorCounts: (data) => set({ colorCounts: data }),
  clearSelectedProduct: () => set({ selectedProduct: null }),
}));

export default useProductStore;