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
        <h3 className="mb-1">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="font-bold text-bagel-dark-red text-2xl mt-2">
          {price}
        </div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
