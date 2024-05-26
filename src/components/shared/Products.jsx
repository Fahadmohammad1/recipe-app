import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await axios.get("http://localhost:3000/watches");
      if (data?.status === 200) {
        setWatches(data?.data);
      }
    }
    loadData();
  }, []);

  return (
    <section className="container mx-auto">
      <div className="lg:grid grid-cols-3 gap-10">
        {watches?.slice(0, 6).map((watch) => (
          <SingleProduct key={watch.id} watch={watch} />
        ))}
      </div>
    </section>
  );
};

export default Products;
