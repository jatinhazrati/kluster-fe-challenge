import { Avatar } from "flowbite-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../../hooks/useBooks";

type IAuthorProps = {
  author: string;
};

const Author: FC<IAuthorProps> = ({ author }) => {
  const navigate = useNavigate();
  const { getAuthorInitials } = useBooks();

  return (
    <Avatar
      placeholderInitials={getAuthorInitials(author)}
      rounded
      className="items-center justify-start"
      onClick={() => navigate("/author" + `/${author}`)}
    >
      <div className="space-y-1 font-medium dark:text-white">
        <div>{author}</div>
      </div>
    </Avatar>
  );
};

export default Author;
