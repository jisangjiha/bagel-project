import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/bagels.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full h-20 bg-bagel-brown-md text-bagel-brown-light flex justify-between items-center px-[10%] shadow-lg z-10">
        <h1 className="text-3xl font-bold">Ess-a-Bagel</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="w-full h-[25rem] z-0 overflow-hidden">
        <img
          src={mealsImage}
          alt="Bagels"
          className="w-[110%] h-full object-cover -rotate-[5deg] -translate-y-16 -translate-x-4"
        />
      </div>
    </Fragment>
  );
};

export default Header;
