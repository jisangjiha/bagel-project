import { useState } from "react";
import AvailableBeverages from "./AvailableBeverages";
import AvailableCreamcheese from "./AvailableCreamcheese";
import AvailableBagels from "./AvailableBagels";
import AvailableExtras from "./AvailableExtras";
import classes from "./MenuTab.module.css";

const MenuTab = (props) => {
  const [content, setContent] = useState(<AvailableBagels />);

  const handleBagels = (e) => {
    setContent(<AvailableBagels />);
  };

  const handleCreamcheese = (e) => {
    setContent(<AvailableCreamcheese />);
  };

  const handleBeverages = (e) => {
    setContent(<AvailableBeverages />);
  };

  const handleExtras = (e) => {
    setContent(<AvailableExtras />);
  };

  return (
    <section>
      <div className={classes.menutab}>
        <h2 onClick={handleBagels}>Bagels</h2>
        <h2 onClick={handleCreamcheese}>Cream Cheese & Spreads</h2>
        <h2 onClick={handleBeverages}>Beverages</h2>
        <h2 onClick={handleExtras}>Extras</h2>
      </div>
      <div>{content}</div>
    </section>
  );
};

export default MenuTab;
