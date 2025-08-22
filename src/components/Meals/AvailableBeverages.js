import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_BEVERAGES = [
  {
    id: "v1",
    name: "Coffee",
    description: "",
    price: 2.25,
  },
  {
    id: "v2",
    name: "Cafe Latte",
    description: "",
    price: 4.75,
  },
  {
    id: "v3",
    name: "Hot Chocolate",
    description: "",
    price: 2.55,
  },
  {
    id: "v4",
    name: "Orange Juice",
    description: "",
    price: 4.75,
  },
  {
    id: "v5",
    name: "Bottled Water",
    description: "",
    price: 2.0,
  },
];

const AvailableBeverages = (props) => {
  const BeveragesList = DUMMY_BEVERAGES.map((meal) => (
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
        <ul className="list-none m-0 p-0">{BeveragesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableBeverages;
