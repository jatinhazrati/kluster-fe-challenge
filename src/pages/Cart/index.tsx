import { Button, Card, Kbd } from "flowbite-react";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/cart/reducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { cartItems } = useAppSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState<number>();

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    setTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <main>
      <section className="max-container padding-x">
        <div className="flex flex-col justify-start gap-5 py-8">
          <h2 className="text-4xl font-palanquin font-bold">Cart</h2>
        </div>
        <Card className="max-w-8xl">
          <div className="flow-root">
            {cartItems.length > 0 ? (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {cartItems?.map((cartItem) => (
                  <li
                    className="font-montserrat py-3 sm:py-4"
                    key={cartItem.id}
                  >
                    <div className="flex items-center space-x-8">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-base font-medium text-gray-900 dark:text-white">
                          {cartItem.title}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center">
                        <Kbd
                          icon={MdKeyboardArrowUp}
                          onClick={() =>
                            dispatch(incrementQuantity(cartItem.id))
                          }
                        />
                        {cartItem.quantity}
                        <Kbd
                          icon={MdKeyboardArrowDown}
                          onClick={() =>
                            dispatch(decrementQuantity(cartItem.id))
                          }
                        />
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ₹{cartItem.price}
                      </div>
                      <div
                        className="flex gap-2 items-center"
                        onClick={() => dispatch(removeFromCart(cartItem.id))}
                      >
                        <AiFillDelete size={22} />
                      </div>
                    </div>
                  </li>
                ))}
                <li className="font-montserrat py-3 sm:py-4">
                  <div className="flex items-center space-x-8">
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-medium text-gray-900 dark:text-white">
                        Total
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      ₹ {totalPrice}
                    </div>
                  </div>
                </li>
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center gap-8">
                <h5 className="text-xl font-montserrat font-semibold leading-none text-gray-900 dark:text-white">
                  Cart is Empty!
                </h5>
                <Button color="purple" onClick={() => navigate("/books")}>
                  <span className="text-base font-montserrat">
                    View Bookstore
                  </span>
                </Button>
              </div>
            )}
          </div>
        </Card>
      </section>
    </main>
  );
};

export default Cart;
