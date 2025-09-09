import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-80 overflow-scroll">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-2xl mt-6 mb-10 cursor-default">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="w-60 cursor-pointer bg-transparent border border-bagel-brown-darker px-8 py-2 rounded-[25px] text-bagel-brown-darker hover:bg-bagel-brown-md hover:border-bagel-brown-md hover:text-bagel-brown-light"
          onClick={props.onClose}
        >
          Continue Shopping
        </button>
        {hasItems && (
          <button className="w-60 cursor-pointer bg-bagel-brown-dark text-bagel-brown-light border border-bagel-brown-dark px-8 py-2 rounded-[25px] hover:bg-bagel-brown-darker">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
