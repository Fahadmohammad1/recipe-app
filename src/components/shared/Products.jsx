import SingleProduct from "./SingleProduct";
import useFetchData from "../../hooks/useFetchData";

const Products = () => {
  const watches = useFetchData();

  return (
    <section className="container mx-auto mb-10">
      <h2 className="text-3xl font-bold text-center mb-14">New Arrival</h2>
      <div className="lg:grid grid-cols-3 gap-10">
        {watches?.slice(0, 6).map((watch) => (
          <SingleProduct key={watch.id} watch={watch} />
        ))}
      </div>
    </section>
  );
};

export default Products;
