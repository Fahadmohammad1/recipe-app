import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

/* eslint-disable react/prop-types */
const ProductDetails = () => {
  const { id } = useParams();
  const watch = useFetchData(id);

  const { title, description, image, price, category } = watch;

  return (
    <section className="h-screen flex items-center container mx-auto bg-main">
      <div className="card card-side bg-base-100 shadow-2xl lg:grid grid-cols-2">
        <figure>
          <img src={image} alt="watch" className="lg:w-2/5 py-3" />
        </figure>
        <div className="card-body">
          <div className="badge badge-accent bg-custom-extra">{category}</div>
          <h2 className="card-title text-3xl">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <p className="font-bold text-xl text-custom-third">${price}</p>
            <button className="btn bg-custom-secondary text-white rounded-full hover:text-black">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
