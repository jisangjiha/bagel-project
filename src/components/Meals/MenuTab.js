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

  const tabButtonClass =
    "px-4 py-2 m-0 rounded-t-xl bg-white text-bagel-brown-md-dark font-bold shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:cursor-pointer hover:text-bagel-brown-dark flex items-center justify-center";

  return (
    <section>
      <div className="flex flex-row justify-start mt-10 h-12">
        <section className="w-[90%] mx-14 flex">
          <h2 onClick={handleBagels} className={tabButtonClass}>
            Bagels
          </h2>
          <h2 onClick={handleCreamcheese} className={tabButtonClass}>
            Cream Cheese & Spreads
          </h2>
          <h2 onClick={handleBeverages} className={tabButtonClass}>
            Beverages
          </h2>
          <h2 onClick={handleExtras} className={tabButtonClass}>
            Extras
          </h2>
        </section>
      </div>
      <div>{content}</div>
    </section>
  );
};

export default MenuTab;
