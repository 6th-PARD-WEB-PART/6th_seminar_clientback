"use client";

import { useState } from "react";
import { productColors } from "@/constants/productColors";

export default function ProductPostForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [color, setColor] = useState("");

  const isFormValid = name && price && quantity && color;

  const handleSubmit = async () => {
    try {
      if (!isFormValid) return;

      // TODO: POST API에 보낼 Payload(Request Body) 만들기

      // TODO: 상품 POST API 함수 호출하기 (lib/productApi.ts 내부에 구현된 함수 활용)

      alert(`상품 등록이 될랑말랑: ${name} ${price} ${quantity} ${color}`); // TODO: 성공 시, 주석 처리하기
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-6 p-4 border border-zinc-200 rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-semibold mb-2">새 상품 등록</h2>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="상품명"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-zinc-200 p-2 rounded"
        />

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
          placeholder="가격"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-zinc-200 p-2 rounded"
        />
        <input
          type="number"
          placeholder="상품 수량"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border border-zinc-200 p-2 rounded"
        />

        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`p-2 rounded text-white transition-colors ${
            isFormValid
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          등록하기
        </button>
      </div>
    </div>
  );
}
