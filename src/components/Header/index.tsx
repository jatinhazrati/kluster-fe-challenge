import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import { Button, Navbar } from "flowbite-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";
import { useAppSelector } from "../../redux/hooks";
import { NAVBAR_LINKS } from "./constants";

const Header: FC = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const { isLoaded, isSignedIn } = useUser();

  return (
    <section className="max-container py-4">
      <Navbar>
        <Navbar.Brand>
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
            Bookbay
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-2">
          <Link to="/cart">
            <Button color="purple">
              <span className="text-base">
                Cart {cartItems.length > 0 && `(${cartItems.length})`}
              </span>
            </Button>
          </Link>
          <Button color="purple">
            {!isLoaded || !isSignedIn ? <SignInButton /> : <SignOutButton />}
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {NAVBAR_LINKS.map((link) => (
            <Link key={link.route} className="text-lg" to={link.route}>
              {link.name}
            </Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Header;
