"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Header() {
  const { totalItems, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-lg font-bold">🛍️ Store</h1>

      <div className="mr-10 flex items-center space-x-4">
        <p className="text-gray-700">
          Items: <span className="font-semibold">{totalItems}</span>
        </p>
        <p className="text-gray-700">
          Total: <span className="font-semibold">${totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </header>
  );
}
