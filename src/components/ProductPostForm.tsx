import { ProductColor } from "@/types/product";

export default function ProductEditForm() {
  const colors: ProductColor[] = ["red", "green", "blue"];

  return (
    <div className="mt-6 p-4 border border-zinc-200 rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-semibold mb-2">새 상품 등록</h2>
      <form className="flex flex-row gap-3">
        <input
          type="text"
          placeholder="상품명"
          className="border border-zinc-200 p-2 rounded"
        />
        <input
          type="number"
          placeholder="가격"
          className="border border-zinc-200 p-2 rounded"
        />
        <input
          type="number"
          placeholder="수량"
          className="border border-zinc-200 p-2 rounded"
        />
        <select
          className="border border-zinc-200 p-2 rounded bg-white"
          defaultValue=""
        >
          <option value="" disabled>
            색상 선택
          </option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color === "red" ? "빨강" : color === "green" ? "초록" : "파랑"}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          등록하기
        </button>
      </form>
    </div>
  );
}
