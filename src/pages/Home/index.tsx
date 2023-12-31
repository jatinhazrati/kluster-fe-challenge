import home_cover from "../../assets/home_cover.svg";
import BookCard from "../../components/BookCard";
import { useBooks } from "../../hooks/useBooks";

const Home = () => {
  const { featuredBooks } = useBooks();

  return (
    <main>
      <section className="w-full flex xl:flex-row flex-col gap-10 max-container xl:padding-l wide:padding-r padding-b">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-24">
          <h1 className="mt-2 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:whitespace-nowrap relative z-10 pr-10">
              Welcome to
            </span>
            <br />
            Bookbay
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-xl">
            Journey Through Pages, Explore Endless Worlds
          </p>
        </div>
        <div className="relative flex-1 flex justify-center items-center max-xl:py-10 max-xl:padding-x">
          <img
            src={home_cover}
            alt="Home Logo"
            width={400}
            height={400}
            className="object-contain relative z-10"
          />
        </div>
      </section>
      <section className="max-container padding-l padding-r padding-b">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-purple-800"> Featured </span> Books
          </h2>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {featuredBooks.map((book) => (
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

export default Home;
