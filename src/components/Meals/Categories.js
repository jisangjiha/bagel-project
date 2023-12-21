import React from "react";
import classes from "./Categories.module.css";

import Card from "../UI/Card";

const DUMMY_CATEGORIES = [
  {
    id: "c1",
    name: "Bagel",
    products: [],
  },
  {
    id: "c2",
    name: "Cream Cheese",
    products: [],
  },
  {
    id: "c3",
    name: "Beverage",
    products: [],
  },
];

const Categories = (props) => {
  //const [isLoading, setIsLoading] = useState(false);

  const selectHandler = (id) => {
    props.onSelect(id);
  };

  return DUMMY_CATEGORIES.map((category) => (
    <section className={classes.categories}>
      <Card>
        <h2 key={category.id} onClick={() => selectHandler(category.id)}>
          {category.name}
        </h2>
      </Card>
    </section>
  ));
};

export default Categories;
