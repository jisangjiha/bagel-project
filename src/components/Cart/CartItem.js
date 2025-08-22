const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b-2 border-bagel-green py-1 my-1">
      <div>
        <h2 className="mb-0.5 text-bagle-gray">{props.name}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-bold text-bagel-green">{price}</span>
          <span className="font-bold border border-bagel-light-gray rounded-md px-2 py-1 text-bagel-green">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <button
          onClick={props.onRemove}
          className="font-bold text-xl text-bagle-green border border-bagle-green w-12 text-center rounded-md bg-transparent cursor-pointer m-1 hover:bg-bagle-green hover:text-white active:bg-bagle-green active:text-white"
        >
          −
        </button>
        <button
          onClick={props.onAdd}
          className="font-bold text-xl text-bagle-green border border-bagle-green w-12 text-center rounded-md bg-transparent cursor-pointer m-1 hover:bg-bagle-green hover:text-white active:bg-bagle-green active:text-white"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
