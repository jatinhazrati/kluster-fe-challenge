import { combineReducers } from "@reduxjs/toolkit";
import BooksReducer from "./books/reducer";
import CartReducer from "./cart/reducer";

export const rootReducer = combineReducers({
  books: BooksReducer,
  cart: CartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
