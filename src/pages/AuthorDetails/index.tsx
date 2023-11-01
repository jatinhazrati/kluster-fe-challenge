import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { IBook } from "../../utils/types";
import BookCard from "../../components/BookCard";

const AuthorDetails = () => {
  const { books } = useAppSelector((state) => state.books);
  const [authorBooks, setAuthorBooks] = useState<IBook[]>([]);

  const { name } = useParams();

  useEffect(() => {
    if (name && books) {
      const authorBooks = books.filter((book) => {
        const lowerAuthors = (book.authors || "").toLowerCase();
        return lowerAuthors.includes(name.toLowerCase());
      });
      authorBooks && setAuthorBooks(authorBooks);
    }
  }, [name, books]);

  return (
    <main>
      <section className="max-container padding-x padding-b">
        <div className="flex flex-col justify-start gap-5 pt-8">
          <h2 className="text-4xl font-palanquin font-bold">
            <span className="text-purple-800"> {name || ""} </span> Books
          </h2>
        </div>
        <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {authorBooks.map((book) => (
            <BookCard
              id={book.id}
              title={book.title}
              img_src={book.image_url}
              rating={book.rating}
              price={book.num_pages}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AuthorDetails;
