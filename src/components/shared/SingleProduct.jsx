/* eslint-disable react/prop-types */
const SingleProduct = ({ watch }) => {
  const { title, description, image, price, category } = watch;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="badge badge-accent">{category}</div>
      <figure className="px-10 pt-10">
        <img src={image} alt="watch" className="rounded-xl lg:w-3/5" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)}</p>
        <div className="card-actions w-full flex justify-between items-center">
          <p className="font-bold text-lg text-red-500">{price}</p>
          <button className="btn btn-sm rounded-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
