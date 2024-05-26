import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <section className="h-screen"></section>;
};

export default ProductDetails;
