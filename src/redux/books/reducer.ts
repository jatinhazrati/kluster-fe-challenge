import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IBook } from "../../utils/types";

interface IBooksInitialState {
  books: IBook[];
}

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  try {
    const response = await axios.get(`https://example-data.draftbit.com/books`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const initialState: IBooksInitialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchBooks.fulfilled,
      (state, action: PayloadAction<IBook[]>) => {
        state.books = action.payload;
      }
    );
    builder.addCase(fetchBooks.rejected, (state) => {
      state.books = [];
    });
  },
});

const BooksReducer = booksSlice.reducer;
export default BooksReducer;
