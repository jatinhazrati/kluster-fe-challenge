import { Button, Navbar } from "flowbite-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_LINKS } from "./constants";

const Header: FC = () => {
  return (
    <section className="max-container py-4">
      <Navbar>
        <Navbar.Brand>
          <img
            src="/src/assets/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
            Bookbay
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-2">
          <Link to="/cart">
            <Button color="purple">
              <span className="text-base">Cart</span>
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {NAVBAR_LINKS.map((link) => (
            <Link className="text-lg" to={link.route}>
              {link.name}
            </Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Header;
