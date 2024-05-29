import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

/* eslint-disable react/prop-types */
const ProductDetails = () => {
  const { id } = useParams();
  const watch = useFetchData(id);

  const { title, description, image, price, category } = watch;

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="lg:w-2/5" src={image} alt="watch" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
