import { useAppSelector } from "../redux/hooks";
import { IBook } from "../utils/types";

interface IUseBooks {
  featuredBooks: IBook[];
  getAuthorInitials: (author: string) => string;
  getGenres: (book: IBook) => string[];
  genresList: string[];
  authorsList: string[];
}

export const useBooks = (): IUseBooks => {
  const { books } = useAppSelector((state) => state.books);

  const featuredBooks = books.filter((books) => books.rating > 4.5);

  const getAuthorInitials = (author: string): string => {
    let authorInitials = "";

    const authorName = author?.split(" ");
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

  const genresList: string[] =
    books &&
    Array.from(
      new Set(
        books?.flatMap((book) =>
          book.genres?.split(", ").map((genre) => genre.trim())
        )
      )
    );

  const authorsList: string[] =
    books && Array.from(new Set(books?.map((book) => book.authors)));

  return {
    featuredBooks,
    getAuthorInitials,
    getGenres,
    genresList,
    authorsList,
  };
};
