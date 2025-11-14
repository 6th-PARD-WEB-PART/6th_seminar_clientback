// import useProductStore from "@/stores/useProductStore";
import { getProductByIdApi } from "@/lib/productApi";
import { Product } from "@/types/product";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Product | null>(null);

  // DONE: 임시 데이터 지우기
  // const { products } = useProductStore();
  // const data = products[0]; // 임시 데이터용 변수 'data'

  const fetchProductDetail = async (productId: string) => {
    try {
      const response = await getProductByIdApi(productId);

      // DONE: response 데이터 product 상태에 저장하기
      setProduct(response);
    } catch (err) { 
      console.error(err);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    if (!id) return;

    const fetchProduct = async () => {
      // DONE: 상품 ID를 가지고 상품 상세 GET API 함수 호출하기 (lib/productApi.ts 내부에 구현된 함수 활용)
      fetchProductDetail(id as string);      

      // CHALLENGE1 TODO: Recently Selected Product 전역 상태 갱신하기
    };

    fetchProduct();
  }, [router.isReady, id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50">
      <h1 className="text-2xl font-bold mb-4">상품 상세 페이지</h1>

      <div className="w-40 flex flex-col items-start justify-center m-10 text-xl">
        <p className="p-2">
          <strong>상품명:</strong> {product?.productName}
        </p>
        <p className="p-2">
          <strong>색상:</strong>{" "}
          {product?.color === "red" ? "빨강" : product?.color === "green" ? "초록" : "파랑"}
        </p>
        <p className="p-2">
          <strong>가격:</strong> {product?.price}원
        </p>
        <p className="p-2">
          <strong>상품 수량:</strong> {product?.total_count}
        </p>
      </div>

      <Link
        href={`/`}
        className="flex items-center justify-center bg-pink-500 text-xl text-white px-10 py-2 rounded-lg hover:bg-pink-600"
      >
        홈으로
      </Link>
    </div>
  );
}
