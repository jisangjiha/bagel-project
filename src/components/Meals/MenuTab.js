import classes from "./MenuTab.module.css";

const MenuTab = (props) => {
  return (
    <section className={classes.menutab}>
      <h2>Bagels</h2>
      <h2>Cream Cheese & Spreads</h2>
      <h2>Beverages</h2>
    </section>
  );
};

export default MenuTab;
