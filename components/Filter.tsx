"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSearchQuery, setSortBy } from "@/store/slices/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const { searchQuery, sortBy } = useSelector(
    (state: RootState) => state.filter
  );

  return (
    <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        placeholder="🔍 Find product..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="border p-2 rounded-md w-1/2"
      />

      <select
        value={sortBy}
        onChange={(e) =>
          dispatch(setSortBy(e.target.value as "price" | "rating" | ""))
        }
        className="border p-2 rounded-md"
      >
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
