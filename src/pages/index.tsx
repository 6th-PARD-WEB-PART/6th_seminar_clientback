'use client';

import ReactConfetti from "react-confetti";
import { useEffect, useState } from "react";
import ProductTable from "@/components/ProductTable";
import ProductEditForm from "@/components/ProductEditForm";

export default function Home() {
  const [showConfetti, setShowConfetti] = useState<boolean>(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen items-center justify-center gap-10 bg-zinc-50 font-sans dark:bg-black`}
    >
      {/* 웹 파트 파이팅 폭죽 */}
      {showConfetti && (
        <ReactConfetti recycle={false} />
      )}

      {/* 웹 파트 파이팅 텍스트 애니메이션 */}
      {showConfetti && (
        <div className="absolute top-10 flex h-20 items-center justify-center bg-zinc-50">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 animate-bounce">
            웹파트 파이팅 💪🔥
          </h1>
        </div>
      )}

      {/* 헤더 */}
      <h1 className="font-extrabold text-2xl mb-4">
        상품 재고 관리 시스템
      </h1>

      {/* 상품 재고 관리 테이블 */}
      <ProductTable />

      {/* 새로운 상품 재고 등록 폼 */}
      <ProductEditForm />
    </div>
  );
}
