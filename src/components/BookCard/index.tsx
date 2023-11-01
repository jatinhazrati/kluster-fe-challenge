import { Card } from "flowbite-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IBookCardProps {
  id: number;
  title: string;
  img_src: string;
  rating: number;
  price: number;
}

const BookCard: FC<IBookCardProps> = ({
  id,
  title,
  img_src,
  rating,
  price,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      renderImage={() => (
        <img className="book_image" alt="book thumbnail" src={img_src} />
      )}
      onClick={() => navigate("/book" + `/${id}`)}
    >
      <a href="#">
        <h5 className="text-xl font-palanquin font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>{title}</p>
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <img src="/src/assets/star.svg" alt="star rating" />
        <span className="font-montserrat mx-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-white-800 dark:bg-purple-200 dark:text-purple-800">
          <p>{rating}</p>
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white">
          ₹ {price}
        </span>
        <div className="font-montserrat rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-cyan-800">
          <p>Add to Cart</p>
        </div>
      </div>
    </Card>
  );
};

export default BookCard;
