"use client";

import { ReactNode, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/store";
import { setCartState } from "@/store/slices/cartSlice";

function LoadCart() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch(setCartState(JSON.parse(storedCart)));
    }
  }, [dispatch]);

  return null;
}

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <LoadCart />
      {children}
    </Provider>
  );
}
