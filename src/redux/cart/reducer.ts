import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../../utils/types";

interface ICartInitialState {
  cartItems: ICartItem[];
}

export const initialState: ICartInitialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const newBook = action.payload;
      const existingBook = state.cartItems.find(
        (book) => book.id === newBook.id
      );

      if (existingBook) {
        existingBook.quantity += 1;
      } else {
        state.cartItems.push({ ...newBook, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const bookId = action.payload;
      const bookIndex = state.cartItems.findIndex((book) => book.id === bookId);

      if (bookIndex !== -1) {
        state.cartItems.splice(bookIndex, 1);
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const bookId = action.payload;
      const existingBook = state.cartItems.find((book) => book.id === bookId);

      if (existingBook) {
        existingBook.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const bookId = action.payload;
      const existingBook = state.cartItems.find((book) => book.id === bookId);

      if (existingBook && existingBook.quantity > 1) {
        existingBook.quantity -= 1;
      } else if (existingBook && existingBook.quantity === 1) {
        const bookIndex = state.cartItems.findIndex(
          (book) => book.id === bookId
        );
        if (bookIndex !== -1) {
          state.cartItems.splice(bookIndex, 1);
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

const CartReducer = cartSlice.reducer;
export default CartReducer;
