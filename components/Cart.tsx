"use client";
import Image from "next/image";
import { useState } from "react";
import { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "@/store/slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 right-0 bg-white shadow-lg p-4 w-80 h-full z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-[-40px] top-4 bg-blue-500 text-white px-2 py-1 rounded-l-md"
      >
        {isOpen ? "→" : "🛒"}
      </button>

      <h2 className="text-lg font-bold mb-4">🛒 Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">The cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between mb-2 border-b pb-2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div className="flex-1 ml-2">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
