import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_EXTRAS = [
  {
    id: "e1",
    name: "Tomato",
    description: "",
    price: 1.05,
  },
  {
    id: "e2",
    name: "Cheese",
    description: "",
    price: 1.75,
  },
  {
    id: "e3",
    name: "Lettuce",
    description: "",
    price: 0.5,
  },
  {
    id: "e4",
    name: "Onion",
    description: "",
    price: 0.5,
  },
  {
    id: "e5",
    name: "Bacon",
    description: "",
    price: 4.55,
  },
];

const AvailableExtras = (props) => {
  const ExtrasList = DUMMY_EXTRAS.map((meal) => (
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
        <ul className="list-none m-0 p-0">{ExtrasList}</ul>
      </Card>
    </section>
  );
};

export default AvailableExtras;
