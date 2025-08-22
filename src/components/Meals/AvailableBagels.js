import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_BAGELS = [
  {
    id: "b1",
    name: "Bagels",
    description:
      "Plain, Everything, Poppy, Pumpernickel, Onion, Galic, Sesame, Salt, Cinnamon Rsisin, Whole Wheat, Whole Wheat Everything, Multi Grain",
    price: 1.95,
  },
  {
    id: "b2",
    name: "Signiture Favorite",
    description:
      "sliced Nova, scallion cream cheese, lettuce, tomato, red onion and capers",
    price: 16.95,
  },
  {
    id: "b3",
    name: "NYC BLTA",
    description:
      "crispy bacon, avocado, lettuce and tomato with mayo or Russian Dressing",
    price: 11.75,
  },
  {
    id: "b4",
    name: "DIY Sandwitch",
    description: "Do it Yourself by adding your favorite ingredients",
    price: 5.0,
  },
];

const AvailableBagels = (props) => {
  const bagelsList = DUMMY_BAGELS.map((meal) => (
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
        <ul className="list-none m-0 p-0">{bagelsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableBagels;
