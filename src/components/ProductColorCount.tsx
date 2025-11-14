import { getQuantityByColorApi } from "@/lib/productApi";
import { ProductColorCountResponse } from "@/types/product";
// import useProductStore from "@/stores/useProductStore";
import { useEffect, useState } from "react";

export default function ProductColorCount() {
  // CHALLENGE2 DONE: 전역 상태 관리에서 불러오는 임시 데이터 관련 코드 주석 처리하기
  // const { colorQuantities } = useProductStore();

  const [colorQuantities, setColorQuantities] = useState<{color: string, total_count: number}[]>([]);

  useEffect(() => {
    const fetchProductCountByColor = async () => {
      // CHALLENGE2 DONE: 특정 색깔 별 전체 상품 재고 GET API 함수 호출하기 (lib/productApi.ts 내부에 구현된 함수 활용)
      const res = await getQuantityByColorApi();
      
      // CHALLENGE2 DONE: response 데이터를 useState 상태에 저장하기
      setColorQuantities(res.colorCountDtoList);
    };

    fetchProductCountByColor();
  }, []);

  return (
    <div className="mt-6 p-4 border border-yellow-200 rounded-lg bg-yellow-100 shadow-md">
      <h2 className="text-lg font-semibold mb-2">
        색상 별 전체 상품 재고 확인 페이지
      </h2>
      <div className="flex flex-row items-center justify-center">
        {colorQuantities?.map((c, index) => (
          <div
            key={index}
            className="w-40 flex flex-row items-center justify-between bg-white p-4 m-2 rounded-lg"
          >
            <span className="font-medium">
              {c.color === "red" ? "빨강" : c.color === "green" ? "초록" : "파랑"} 색상
            </span>
            <span className="font-bold">총 {c.total_count}개</span>
          </div>
        ))}
      </div>
    </div>
  );
}
