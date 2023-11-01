import { useAppSelector } from "../redux/hooks";
import { IBook } from "../utils/types";

interface IUseBooks {
  featuredBooks: IBook[];
}

export const useBooks = (): IUseBooks => {
  const { books } = useAppSelector((state) => state.books);

  const featuredBooks = books.filter((books) => books.rating > 4.50);

  return {
    featuredBooks,
  };
};
