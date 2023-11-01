import { useAppSelector } from "../redux/hooks";
import { IBook } from "../utils/types";

interface IUseBooks {
  featuredBooks: IBook[];
  getAuthorInitials: (book: IBook) => string;
  getGenres: (book: IBook) => string[];
}

export const useBooks = (): IUseBooks => {
  const { books } = useAppSelector((state) => state.books);

  const featuredBooks = books.filter((books) => books.rating > 4.5);

  const getAuthorInitials = (book: IBook): string => {
    let authorInitials = "";

    const authorName = book.authors?.split(" ");
    if (Array.isArray(authorName)) {
      for (const word of authorName) {
        authorInitials += word.charAt(0);
      }
    }

    return authorInitials;
  };

  const getGenres = (book: IBook): string[] => {
    const genresList: string[] = [];

    const genres = book.genres?.split(", ");
    if (Array.isArray(genres)) {
      genresList.push(...genres);
    }

    return genresList;
  };

  return {
    featuredBooks,
    getAuthorInitials,
    getGenres,
  };
};
