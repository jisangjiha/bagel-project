import { useContext } from "react";

import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="flex justify-between m-4 pb-4 border-b border-gray-300">
      <div>
        <h3 className="font-bold">{props.name}</h3>
        <div className="italic text-sm my-2 text-bagel-brown-md-dark">
          {props.description}
        </div>
        <div className="font-bold text-bagel-brown-md text-xl">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
