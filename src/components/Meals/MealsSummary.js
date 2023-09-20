import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Everything on a BAGEL</h2>
      <p>Hand-Rolled Bagels established 1976</p>
      <p>
        Ess-a-Bagel thanks you for your support over the last forty years, and
        looks forward to many more years to come.
      </p>
    </section>
  );
};

export default MealsSummary;
