import { Avatar } from "flowbite-react";
import { useBooks } from "../../hooks/useBooks";
import { useAppSelector } from "../../redux/hooks";

const Authors = () => {
  const { books } = useAppSelector((state) => state.books);
  const { getAuthorInitials } = useBooks();

  return (
    <main>
      <section className="max-container padding-x padding-b">
        <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 sm:gap-6 gap-12">
          {books.map((book) => (
            <Avatar
              key={book.id}
              placeholderInitials={getAuthorInitials(book)}
              rounded
              className="items-start justify-start"
            >
              <div className="space-y-1 font-medium dark:text-white">
                <div>{book.authors}</div>
              </div>
            </Avatar>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Authors;
