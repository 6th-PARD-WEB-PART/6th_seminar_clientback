import Link from "next/link";

const products = [
  { productName: "노트북", price: 1200000, total_count: 5, color: "실버", sellable: true },
  { productName: "키보드", price: 80000, total_count: 20, color: "블랙", sellable: true },
  { productName: "마우스", price: 45000, total_count: 0, color: "화이트", sellable: false },
];

export default function ProductTable() {
  return (
    <table className="w-full max-w-xl border-collapse border border-zinc-200 shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 border border-zinc-200">상품명</th>
          <th className="p-3 border border-zinc-200">가격</th>
          <th className="p-3 border border-zinc-200">수량</th>
          <th className="p-3 border border-zinc-200">색상</th>
          <th className="p-3 border border-zinc-200">판매 가능</th>
          <th className="p-3 border border-zinc-200">수정</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p, idx) => (
          <tr key={idx} className="text-center hover:bg-gray-50">
            <td className="p-2 border border-zinc-200">{p.productName}</td>
            <td className="p-2 border border-zinc-200">{p.price.toLocaleString()}원</td>
            <td className="p-2 border border-zinc-200">{p.total_count}</td>
            <td className="p-2 border border-zinc-200">{p.color}</td>
            <td className="p-2 border border-zinc-200">
              {p.sellable ? (
                <span className="text-green-600 font-semibold">가능</span>
              ) : (
                <span className="text-red-500 font-semibold">불가</span>
              )}
            </td>
            <td className="p-2 border border-zinc-200">
              <Link
                href={`/products/${idx + 1}`} // TODO: 실제 productId로 교체
                className="text-blue-600 hover:underline"
              >
                수정하기
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
