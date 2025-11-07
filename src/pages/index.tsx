"use client";

import ReactConfetti from "react-confetti";
import { useEffect, useState } from "react";
import ProductTable from "@/components/ProductTable";
import ProductPostForm from "@/components/ProductPostForm";
import ProductEditForm from "@/components/ProductEditForm";

export default function Home() {
  const [showConfetti, setShowConfetti] = useState<boolean>(true);
  const [actionType, setActionType] = useState<string>("");

  const handleRecentlySelected = () => {
    // CHALLENGE TODO: 전역으로 관리되고 있는 Recently Selected Product 내용을 콘솔창에 띄우기

    alert(
      "이건 CHALLENGE TODO! 통신 코드 다 짜고 맨 마지막에 시간 남으면 하셈!"
    );
    console.log(
      "여기에 전역 상태 관리되고 있는 가장 최근에 상세 페이지를 확인한 상품의 정보가 뜨도록 하기!!"
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      {/* 웹 파트 파이팅 폭죽 */}
      {showConfetti && <ReactConfetti recycle={false} />}

      {/* 웹 파트 파이팅 텍스트 애니메이션 */}
      {showConfetti && (
        <div className="absolute top-[40%] h-20 flex items-center justify-center rounded-xl p-4 bg-black">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-yellow-200 animate-bounce">
            웹파트 파이팅 💪🔥
          </h1>
        </div>
      )}

      {/* 헤더 */}
      <h1 className="font-extrabold text-2xl m-10">
        색상별 상품 재고 관리 시스템
      </h1>

      <p className="text-lg font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-fuchsia-600 m-2">
        이곳은 이상한 PARD의 회사입니다.
      </p>
      <p className="text-base italic text-black mb-1">
        모든 상품은 색상 기준으로 관리되며,{" "}
        <strong>상품명이 같아도 색이 다르면 다른 상품으로 취급됩니다.</strong>
      </p>
      <p className="text-base italic text-black-600 mb-1">
        같은 색상의 상품들은 모두 같은 재고 개수를 가지며,{" "}
        <strong>
          한 상품의 개수를 수정하면 해당 색상의 모든 상품 개수가 함께 바뀝니다.
        </strong>
      </p>
      <p className="text-base italic text-black-400 mb-1">
        단, 상품을 <strong>처음 등록할 때는</strong> 이미 등록된 상품의 색상이나
        개수와 상관없이 <strong>자유롭게 개수를 정할 수 있습니다.</strong>
      </p>
      <p className="text-base italic text-black-400 mb-4">
        <strong>모든 상품의 색상은 빨강, 초록, 파랑 중 하나입니다.</strong>
      </p>

      {/* 상품 재고 관리 테이블 */}
      <ProductTable />

      {/* actionType 상태에 따라 다른 컴포넌트 렌더링 */}
      {actionType === "" ? (
        <></>
      ) : actionType === "post" ? (
        // 새로운 상품 재고 등록 폼
        <ProductPostForm />
      ) : (
        // 색상 별 상품 재고 수정
        <ProductEditForm />
      )}

      {/* actionType 선택 버튼 */}
      <div className="flex gap-4 m-5">
        <button
          onClick={() => setActionType("post")}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          새 상품 등록
        </button>
        <button
          onClick={() => setActionType("edit")}
          className="px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition"
        >
          색상별 재고 수정
        </button>
        {actionType && (
          <button
            onClick={() => setActionType("")}
            className="px-4 py-2 rounded-lg bg-gray-300 text-black hover:bg-gray-400 transition"
          >
            닫기
          </button>
        )}
      </div>

      <button
        onClick={handleRecentlySelected}
        className="flex items-center justify-center bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
      >
        가장 최근에 상세 페이지를 확인한 상품명
      </button>
    </div>
  );
}
