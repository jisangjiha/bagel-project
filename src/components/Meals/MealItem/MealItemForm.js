import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  const handleDecrease = () => {
    const currentValue = parseInt(amountInputRef.current.value);
    if (currentValue > 1) {
      amountInputRef.current.value = currentValue - 1;
    }
  };

  const handleIncrease = () => {
    const currentValue = parseInt(amountInputRef.current.value);
    if (currentValue < 5) {
      amountInputRef.current.value = currentValue + 1;
    }
  };

  const amountButtonClass =
    "w-8 h-8 rounded-full font-bold bg-transparent hover:bg-bagel-brown-light active:bg-bagel-brown-light flex items-center justify-center";

  return (
    <form
      className="text-right flex flex-col items-end justify-center gap-2 h-full"
      onSubmit={submitHandler}
    >
      <div className="flex items-center justify-end gap-2 border border-bagel-brown-dark rounded-[20px] px-2 py-1">
        <button
          type="button"
          onClick={handleDecrease}
          className={amountButtonClass}
        >
          -
        </button>
        <input
          ref={amountInputRef}
          id={"amount_" + props.id}
          type="number"
          min="0"
          max="5"
          step="1"
          defaultValue="0"
          className="w-10 text-center border-none outline-none bg-transparent font-inherit [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          type="button"
          onClick={handleIncrease}
          className={amountButtonClass}
        >
          +
        </button>
      </div>
      <button className="w-full cursor-pointer bg-bagel-brown-dark text-bagel-brown-light border border-bagel-brown-dark px-8 py-2 rounded-[20px] font-bold hover:bg-bagel-brown-darker active:bg-bagel-brown-darker">
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
