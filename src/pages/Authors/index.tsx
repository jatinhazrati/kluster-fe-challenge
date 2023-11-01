import Author from "../../components/Author";
import { useBooks } from "../../hooks/useBooks";

const Authors = () => {
  const { authorsList } = useBooks();

  return (
    <main>
      <section className="max-container padding-x padding-b">
        <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 sm:gap-6 gap-12">
          {authorsList.map((author, index) => (
            <Author key={index} author={author} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Authors;
