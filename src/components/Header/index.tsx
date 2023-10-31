import { Button, Navbar } from "flowbite-react";
import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          src="/src/assets/mykluster_logo.avif"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Kluster Challenge
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/cart">
          <Button>Cart</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>Home</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
