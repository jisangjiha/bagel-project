import mealsImage from "../../assets/bagels.jpg";

const MealsSummary = (props) => {
  return (
    <div className="w-full h-[25rem] z-0 overflow-hidden relative">
      <img
        src={mealsImage}
        alt="Bagels"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <section className="text-center max-w-[45rem] w-[90%] rounded-xl mt-20 p-8 shadow-[0_1px_18px_10px_rgba(0,0,0,0.25)] relative">
          <div className="absolute inset-0 bg-bagel-brown-light opacity-70 rounded-xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mt-0 text-bagel-brown-md-dark">
              Everything on a BAGEL
            </h2>
            <p className="text-lg mb-4 text-bagel-brown-md-dark">
              Hand-Rolled Bagels established 1976
            </p>
            <p className="text-base text-bagel-brown-md-dark">
              Ess-a-Bagel thanks you for your support over the last forty years,
              <br />
              and looks forward to many more years to come.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MealsSummary;
