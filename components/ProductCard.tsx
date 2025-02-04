"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col h-full">
      <div className="relative w-full h-[200px] overflow-hidden rounded-md">
        <Image
          src={product.image}
          alt={product.title}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 300px"
          fill
          priority
          className="rounded-md object-contain"
        />
      </div>

      <h2 className="text-md font-semibold mt-2 h-12 line-clamp-2">
        {product.title}
      </h2>

      <p className="text-sm text-gray-600 h-14 overflow-hidden">
        {product.description.slice(0, 100)}...
      </p>

      <div className="flex justify-between items-center my-2">
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        <p className="text-yellow-500 text-sm flex items-center">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </p>
      </div>

      <button
        onClick={() =>
          dispatch(
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity: 1,
            })
          )
        }
        className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full h-10"
      >
        Add to cart
      </button>
    </div>
  );
}
