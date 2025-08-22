import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      className={`cursor-pointer border-none bg-bagel-dark-green text-bagel-cream px-8 py-2 flex justify-around items-center rounded-[25px] font-bold hover:bg-bagel-darker-green active:bg-bagel-darker-green ${
        btnIsHighlighted ? "animate-bump" : ""
      }`}
      onClick={props.onClick}
    >
      <span className="w-[1rem] h-[1rem] ">
        <CartIcon />
      </span>
      <span className="mx-2">Your Cart</span>
      <span className="bg-bagel-medium-green px-3 py-0 rounded-[25px] font-bold hover:bg-bagel-green">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
