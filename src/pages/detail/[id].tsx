import { SelectedProduct } from "@/types/product";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// TODO: 임시 데이터 내용 지우기
// 임시 데이터 (실제로는 위의 API 응답 사용)
const data = {
  n: "노트북",
  p: 1200000,
  q: 5,
  c: "blue",
  createdAt: new Date(),
  modifiedAt: new Date(),
  s: true,
};

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<SelectedProduct | null>(null);

  useEffect(() => {
    if (!router.isReady) return;
    if (!id) return;

    const fetchProduct = async () => {
      // TODO: 상품 ID를 가지고 상품 상세 GET API 호출하기

      // TODO: response 데이터 product 상태에 저장하기

      // CHALLENGE TODO: Recently Selected Product 전역 상태 갱신하기

    };

    fetchProduct();
  }, [router.isReady, id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50">
      <h1 className="text-2xl font-bold mb-4">
        상품 상세 페이지 &lt;상세 GET&gt;
      </h1>

      <div className="w-40 flex flex-col items-start justify-center m-10 text-xl">
        <p className="p-2">
          <strong>상품명:</strong> {data.n}
        </p>
        <p className="p-2">
          <strong>색상:</strong>{" "}
          {data.c === "red" ? "빨강" : data.c === "green" ? "초록" : "파랑"}
        </p>
        <p className="p-2">
          <strong>가격:</strong> {data.p}원
        </p>
        <p className="p-2">
          <strong>상품 수량:</strong> {data.q}
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
