import axios from "axios";

// TODO: .env 또는 .env.local 파일에 서버 주소 추가하기
// -> 막판에 코드 다 짜고 연결할 즈음에 서버 파디한테 요청하면 줄 거임
// -> 환경 변수명 잘 맞춰주기
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

if (!API_BASE_URL) {
  throw new Error("🚨 API_URL이 정의되지 않았습니다! .env.local을 확인하세요.");
}

// TODO: axios로 전체 상품 GET API 요청 코드 작성하기
export const getAllProductsApi = async () => {
  try {
    const response = await axios.get(``);
  } catch (err) {
    console.error("데이터 불러오기 실패", err);
    return [];
  }
};

// TODO: axios로 상품 상세 GET API 요청 코드 작성하기 (백틱 문법: `${변수}` 잘 활용해보기!)
export const getProductByIdApi = async () => {};

// TODO: axios로 새로운 상품 등록 POST API 요청 코드 작성하기
export const postProductApi = async () => {};

// TODO: axios로 색상 별 상품 개수 UPDATE API 요청 코드 작성하기 (백틱 문법: `${변수}` 잘 활용해보기!)
export const updateQuantityByColor = async () => {};
