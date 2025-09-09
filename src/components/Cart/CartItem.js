const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const amountButtonCartItemClass =
    "w-8 h-8 rounded-full font-bold bg-transparent hover:bg-bagel-brown-light active:bg-bagel-brown-light flex items-center justify-center";

  return (
    <li className="flex justify-between items-center border-b-2 border-bagel-brown-light pl-2 py-2 cursor-default">
      <div>
        <h2 className="mb-0.5 text-bagel-gray text-md font-bold">
          {props.name}
        </h2>
        <span className="font-bold text-bagel-brown-md">{price}</span>
      </div>
      <div className="flex flex-col md:flex-row">
        <button onClick={props.onRemove} className={amountButtonCartItemClass}>
          −
        </button>
        <span className="font-bold px-2 py-1 text-bagel-brown-dark">
          {props.amount}
        </span>
        <button onClick={props.onAdd} className={amountButtonCartItemClass}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
