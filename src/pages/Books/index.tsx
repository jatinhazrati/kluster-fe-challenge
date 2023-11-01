import { Button, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";
import { useBooks } from "../../hooks/useBooks";
import { useAppSelector } from "../../redux/hooks";
import { IBook } from "../../utils/types";

const Books = () => {
  const { books } = useAppSelector((state) => state.books);

  const { genresList, authorsList } = useBooks();

  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  const filterBooks = (): void => {
    const newFilteredBooks = books.filter((book) => {
      const matchesSearch =
        !searchInput ||
        (book.title || "").toLowerCase().includes(searchInput.toLowerCase());
      const matchesAuthors =
        !selectedAuthor || (book.authors || "").includes(selectedAuthor);
      const matchesGenres =
        !selectedGenre || (book.genres || "").includes(selectedGenre);

      return matchesSearch && matchesAuthors && matchesGenres;
    });

    setFilteredBooks(newFilteredBooks);
  };

  const clearFilters = (): void => {
    setSearchInput("");
    setSelectedAuthor("");
    setSelectedGenre("");
    setFilteredBooks(books);
  };

  useEffect(() => {
    filterBooks();
  }, [books, searchInput, selectedAuthor, selectedGenre]);

  return (
    <main>
      <section className="max-container padding-x padding-b">
        <div className="mt-14 flex flex-col sm:flex-row justify-between gap-5">
          <div>
            <input
              type="text"
              className="block w-full h-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="Search Books..."
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <Dropdown
              label={selectedGenre || "Select Genre"}
              color="purple"
              className="z-10 h-48 overflow-auto bg-white rounded-lg shadow w-4"
            >
              {genresList.map((genre, index) => (
                <>
                  <Dropdown.Item
                    key={index}
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {genre}
                  </Dropdown.Item>
                  {index !== genresList.length && <Dropdown.Divider />}
                </>
              ))}
            </Dropdown>
            <Dropdown
              label={selectedAuthor || "Select Author"}
              color="purple"
              className="z-10 h-48 overflow-auto bg-white rounded-lg shadow w-44"
            >
              {authorsList.map((author, index) => (
                <>
                  <Dropdown.Item
                    key={index}
                    onClick={() => setSelectedAuthor(author)}
                  >
                    {author}
                  </Dropdown.Item>
                  {index !== authorsList.length && <Dropdown.Divider />}
                </>
              ))}
            </Dropdown>
            <Button color="purple" onClick={clearFilters}>
              Clear
            </Button>
          </div>
        </div>
        <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
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

export default Books;
