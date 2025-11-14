"use client";

import { productColors } from "@/constants/productColors";
import { updateQuantityByColor } from "@/lib/productApi";
import { useState } from "react";

export default function ProductEditForm() {
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const isFormValid = color && quantity;

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      // DONE: PATCH API에 보낼 Payload(Request Body) 만들기
      const payload = {
        color: color,
        count: Number(quantity),
      }

      // DONE: 색상 별 상품 개수 PATCH API 함수 호출 (lib/productApi.ts 내부에 구현된 함수 활용)
      await updateQuantityByColor(payload);

      // alert(`색상 별 상품 수정이 될랑말랑: ${color} ${quantity}`); // DONE: 주석 처리 하기
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-6 p-4 border border-slate-200 rounded-lg bg-slate-100 shadow-md">
      <h2 className="text-lg font-semibold mb-2">색상 별 상품 재고 관리</h2>
      <div className="flex flex-row gap-2">
        {/* 색상 선택 드롭다운 */}
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border border-zinc-200 p-2 bg-white rounded text-gray-700"
        >
          <option value="">색상을 선택하세요</option>
          {productColors.map((color) => (
            <option key={color} value={color}>
              {color === "red" ? "빨강" : color === "green" ? "초록" : "파랑"}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="상품 수량"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border border-zinc-200 p-2 bg-white rounded"
        />
        <button
          onClick={handleUpdate}
          disabled={!isFormValid}
          className={`p-2 rounded text-white transition-colors ${
            isFormValid
              ? "bg-slate-500 hover:bg-slate-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          수정하기
        </button>
      </div>
    </div>
  );
}
