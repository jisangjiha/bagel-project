import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <sapn className={classes.icon}>
        <CartIcon />
      </sapn>
      <sapn>Your Cart</sapn>
      <sapn className={classes.badge}>3</sapn>
    </button>
  );
};

export default HeaderCartButton;
