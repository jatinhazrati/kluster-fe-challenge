import Author from "../../components/Author";
import { useAppSelector } from "../../redux/hooks";

const Authors = () => {
  const { books } = useAppSelector((state) => state.books);

  return (
    <main>
      <section className="max-container padding-x padding-b">
        <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 sm:gap-6 gap-12">
          {books.map((book) => (
            <Author key={book.id} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Authors;
