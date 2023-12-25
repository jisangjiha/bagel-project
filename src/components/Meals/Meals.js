import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import MenuTab from "./MenuTab";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <MenuTab />
    </Fragment>
  );
};

export default Meals;
