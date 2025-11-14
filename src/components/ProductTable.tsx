import { getAllProductsApi } from "@/lib/productApi";
// import useProductStore from "@/stores/useProductStore";
import { Product } from "@/types/product";
import Link from "next/link";
import { useState } from "react";

export default function ProductTable() {
  // 전역상태관리에서 임시 데이터로 처음 상태를 초기화하도록 구현해둠
  // const { products } = useProductStore(); // DONE: 전체 GET 임시 데이터 호출 코드 지우기
  
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      // const data = await getAllProductsApi();
      // setProducts(data);
    } catch (err) {
      console.error("데이터 불러오기 실패", err);
    }
  }

  return (
    <table className="w-full max-w-5xl border-collapse border border-skt-200 shadow-md m-5">
      <thead className="bg-sky-100">
        <tr>
          <th className="p-3 border border-sky-200">상품명</th>
          <th className="p-3 border border-sky-200">색상</th>
          <th className="p-3 border border-sky-200">가격</th>
          <th className="p-3 border border-sky-200">상품 수량</th>
          <th className="p-3 border border-sky-200">판매 가능</th>
          <th className="p-3 border border-sky-200">제품 상세</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p, idx) => (
          <tr key={idx} className="text-center">
            <td className="p-2 bg-sky-50 border border-sky-200">{p.productName}</td>
            <td className="p-2 bg-sky-50 border border-sky-200">{p.color === "red" ? "빨강" : p.color === "green" ? "초록" : "파랑"}</td>
            <td className="p-2 border border-sky-200">{p.price.toLocaleString()}원</td>
            <td className="p-2 border border-sky-200">{p.total_count}</td>
            <td className="p-2 border border-sky-200">
              {p.sellable ? (
                <span className="text-green-600 font-semibold">가능</span>
              ) : (
                <span className="text-red-500 font-semibold">불가</span>
              )}
            </td>
            <td className="p-2 border border-sky-200">
              <Link
                href={`/detail/${p.id}`}
                className="text-blue-600 hover:underline"
              >
                상세 페이지
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
