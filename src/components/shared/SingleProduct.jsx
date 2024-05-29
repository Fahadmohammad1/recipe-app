import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ watch }) => {
  const { id, title, description, image, price, category } = watch;
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="badge badge-accent bg-custom-extra">{category}</div>
      <figure className="px-10 pt-10">
        <img src={image} alt="watch" className="rounded-xl lg:w-3/5" />
      </figure>
      <div className="card-body items-center">
        <h2
          onClick={() => navigate(`product/${id}`)}
          className="card-title hover:underline hover:cursor-pointer"
        >
          {title}
        </h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions w-full flex justify-between items-center">
          <p
            className="font-bold text-lg text-custom-third
          "
          >
            ${price}
          </p>
          <button
            onClick={() => navigate(`product/${id}`)}
            className="btn btn-sm rounded-full bg-custom-secondary text-white hover:text-black"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
