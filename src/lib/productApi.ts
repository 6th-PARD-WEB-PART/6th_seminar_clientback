import axios from "axios";
import { ENDPOINT } from "./endPoint";
import { Product, ProductColorRequest, ProductRequest, ProductResponse } from "@/types/product";

// TODO: .env 또는 .env.local 파일에 서버 주소 추가하기
// -> 막판에 코드 다 짜고 연결할 즈음에 서버 파디한테 요청하면 줄 거임
// -> 환경 변수명 잘 맞춰주기
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

if (!API_BASE_URL) {
  throw new Error("🚨 API_URL이 정의되지 않았습니다! .env.local을 확인하세요.");
}

// DONE: axios로 전체 상품 GET API 요청 코드 작성하기
export const getAllProductsApi = async () => {
  try {
    const response = await axios.get<ProductResponse>(`${API_BASE_URL}${ENDPOINT.PRODUCT}`);

    return response.data.readOneProductDtoList;   // 명세서 확인해서 data 안에 뭐가 더 있는지 잘 확인하기!!
  } catch (err) {
    console.error("데이터 불러오기 실패", err);
    return [];
  }
};

// DONE: axios로 상품 상세 GET API 요청 코드 작성하기 (백틱 문법: `${변수}` 잘 활용해보기!)
export const getProductByIdApi = async (id: string) => {
  try {
    const response = await axios.get<Product>(`${API_BASE_URL}${ENDPOINT.PRODUCT}/${id}`);

    return response.data;
  } catch (err) {
    console.error("상품 상세 불러오기 실패", err);
    throw err;
  }
};

// TODO: axios로 특정 상품의 색깔 별 재고 현황 GET API 요청 코드 작성하기
export const getQuantityByColorApi = async () => {};

// DONE: axios로 새로운 상품 등록 POST API 요청 코드 작성하기
export const postProductApi = async (data: ProductRequest) => {
  try {
    const response = await axios.post<ProductRequest>(`${API_BASE_URL}${ENDPOINT.PRODUCT}`, data);

    return response.data;
  } catch (err) {
    console.error("상품 등록 실패", err);
    throw err;
  }
};

// DONE: axios로 색상 별 상품 개수 UPDATE API 요청 코드 작성하기 (백틱 문법: `${변수}` 잘 활용해보기!)
export const updateQuantityByColor = async (data: ProductColorRequest) => {
  try {
    const response = await axios.patch<ProductColorRequest>(`${API_BASE_URL}${ENDPOINT.PRODUCT}/update`, data);

    return response.data;
  } catch (err) {
    console.error("색상 별 재고 업데이트 실패", err);
    throw err;
  }
};
