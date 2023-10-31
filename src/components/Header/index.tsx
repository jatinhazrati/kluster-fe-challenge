import { Button, Navbar } from "flowbite-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_LINKS } from "./constants";

const Header: FC = () => {
  return (
    <Navbar fluid rounded className="max-container pt-4">
      <Navbar.Brand>
        <img
          src="/src/assets/mykluster_logo.avif"
          className="mr-3 h-6 sm:h-9"
          alt="MyKluster Logo"
        />
        <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
          Kluster Challenge
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/cart">
          <Button color="purple"><span className="text-base">Cart</span></Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {NAVBAR_LINKS.map((link) => (
          <Navbar.Link className="text-lg" as={Link} href={link.route}>
            {link.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
