import BookCard from "../../components/BookCard";
import { useAppSelector } from "../../redux/hooks";

const Books = () => {
  const { books } = useAppSelector((state) => state.books);

  return (
    <main>
      <section className="max-container padding-x padding-b">
        <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {books.map((book) => (
            <BookCard
              key={book.id}
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

export default Books;
