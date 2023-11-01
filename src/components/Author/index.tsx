import { Avatar } from "flowbite-react";
import { FC } from "react";
import { useBooks } from "../../hooks/useBooks";
import { IBook } from "../../utils/types";
import { useNavigate } from "react-router-dom";

type IAuthorProps = {
  book: IBook;
};

const Author: FC<IAuthorProps> = ({ book }) => {
  const navigate = useNavigate();
  const { getAuthorInitials } = useBooks();

  return (
    <Avatar
      placeholderInitials={getAuthorInitials(book)}
      rounded
      className="items-center justify-start"
      onClick={() => navigate("/author" + `/${book.authors}`)}
    >
      <div className="space-y-1 font-medium dark:text-white">
        <div>{book.authors}</div>
      </div>
    </Avatar>
  );
};

export default Author;
