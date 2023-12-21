import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import MenuTab from "./MenuTab";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <MenuTab />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
