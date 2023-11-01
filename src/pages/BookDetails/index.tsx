import { Badge } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Author from "../../components/Author";
import { useBooks } from "../../hooks/useBooks";
import { useAppSelector } from "../../redux/hooks";
import { IBook } from "../../utils/types";

const BookDetails = () => {
  const { books } = useAppSelector((state) => state.books);
  const [bookDetail, setBookDetail] = useState<IBook | undefined>();

  const { getGenres } = useBooks();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const bookDetail = books.find((book) => book.id === +id);
      bookDetail && setBookDetail(bookDetail);
    }
  }, [id, books]);

  return (
    <main>
      <section className="w-full flex xl:flex-row flex-col gap-10 max-container xl:padding-l wide:padding-r padding-b pt-12">
        <div className="relative xl:w-2/5 flex justify-center items-center max-xl:py-10 max-xl:padding-x">
          <img
            src={bookDetail?.image_url}
            alt="Book Logo"
            className="object-contain relative z-10"
          />
        </div>
        <div className="relative flex-1 flex-col justify-center items-start w-full max-xl:padding-x ">
          <h1 className="mt-2 font-palanquin text-2xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:whitespace-nowrap relative z-10 pr-10">
              {bookDetail?.title}
            </span>
          </h1>
          {bookDetail && (
            <div className="mt-6">
              <Author book={bookDetail} />
            </div>
          )}
          <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-8 padding-r">
            {bookDetail &&
              getGenres(bookDetail).map((genre, index) => (
                <Badge key={index} color="gray" size="sm">
                  {genre}
                </Badge>
              ))}
          </div>
          <p className="font-montserrat text-slate-gray text-base leading-6 mt-6 mb-14 sm:max-w-xl">
            {bookDetail?.description}
          </p>
        </div>
      </section>
    </main>
  );
};

export default BookDetails;
