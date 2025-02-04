import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  isHydrated: boolean;
};

const initialState: CartState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  isHydrated: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartState: (state, action: PayloadAction<CartState>) => {
      state.cart = action.payload.cart;
      updateTotals(state);
      state.isHydrated = true;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      updateTotals(state);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      updateTotals(state);
    },
    clearCart: (state) => {
      state.cart = [];
      updateTotals(state);
      localStorage.removeItem("cart");
    },
  },
});

const updateTotals = (state: CartState) => {
  state.totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  state.totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  localStorage.setItem("cart", JSON.stringify(state));
};

export const { addToCart, removeFromCart, clearCart, setCartState } = cartSlice.actions;
export default cartSlice.reducer;
