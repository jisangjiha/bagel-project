import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_CREAMCHEESE = [
  {
    id: "c1",
    name: "Plain Cream Cheese",
    description: "Plain Cream Cheese",
    price: 5.0,
  },
  {
    id: "c2",
    name: "Flavored Cream Cheese",
    description:
      "Scallion, Vegetable, Herb, Evrything Herb, Jalapeno, Olive, Sun Dried Tomato, Avocado Garlic, Raisin Walnut, Banana Nut, Apple Cinnamon, Blueberry, Strawberry, Peach, Chocolate Chip, Red Velvet, Oreo, Rainbow Cookie",
    price: 5.75,
  },
  {
    id: "c3",
    name: "Plain Tofu Spreads",
    description: "Plain Tofu",
    price: 5.65,
  },
  {
    id: "c4",
    name: "Flavored Tofu Spreads",
    description:
      "Scallion, Vegetable, Olive, Sun Dried Tomato, Herb, Raisin Walnut",
    price: 6.25,
  },
  {
    id: "c5",
    name: "Butters & Jellies",
    description: "Butter, Grape Jelly, Strawberry Jelly",
    price: 3.4,
  },
  {
    id: "c6",
    name: "Peanut Butter",
    description: "Peanut Butter",
    price: 4.95,
  },
];

const AvailableCreamcheese = (props) => {
  const CreamcheeseList = DUMMY_CREAMCHEESE.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="w-[90%] mx-12 animate-meals-appear">
      <Card>
        <ul className="list-none m-0 p-0">{CreamcheeseList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCreamcheese;
