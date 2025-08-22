import { useState } from "react";
import AvailableBeverages from "./AvailableBeverages";
import AvailableCreamcheese from "./AvailableCreamcheese";
import AvailableBagels from "./AvailableBagels";
import AvailableExtras from "./AvailableExtras";

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
      <div className="flex justify-start flex-basis-20% mt-2 mx-4">
        <h2
          onClick={handleBagels}
          className="p-4 m-0 rounded-t-xl bg-white text-bagel-green shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:cursor-pointer hover:text-bagel-cream"
        >
          Bagels
        </h2>
        <h2
          onClick={handleCreamcheese}
          className="p-4 m-0 rounded-t-xl bg-white text-bagel-green shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:cursor-pointer hover:text-bagel-cream"
        >
          Cream Cheese & Spreads
        </h2>
        <h2
          onClick={handleBeverages}
          className="p-4 m-0 rounded-t-xl bg-white text-bagel-green shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:cursor-pointer hover:text-bagel-cream"
        >
          Beverages
        </h2>
        <h2
          onClick={handleExtras}
          className="p-4 m-0 rounded-t-xl bg-white text-bagel-green shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:cursor-pointer hover:text-bagel-cream"
        >
          Extras
        </h2>
      </div>
      <div>{content}</div>
    </section>
  );
};

export default MenuTab;
