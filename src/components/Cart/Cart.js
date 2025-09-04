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
      <div className="flex justify-between items-center font-bold text-2xl my-4">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="flex justify-end">
        <button
          className="cursor-pointer bg-transparent border border-bagel-brown-darker px-8 py-2 rounded-[25px] ml-4 text-bagel-brown-darker hover:bg-bagel-brown-md hover:border-bagel-brown-md hover:text-bagel-brown-light"
          onClick={props.onClose}
        >
          Close
        </button>
        {hasItems && (
          <button className="cursor-pointer bg-bagel-brown-darker text-bagel-brown-light border border-bagel-brown-darker px-8 py-2 rounded-[25px] ml-4 hover:bg-bagel-brown-md hover:border-bagel-brown-md hover:text-bagel-brown-light">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
