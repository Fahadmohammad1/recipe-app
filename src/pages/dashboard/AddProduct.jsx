import axios from "axios";
import Swal from "sweetalert2";
import useFetchData from "../../hooks/useFetchData";

const AddProduct = () => {
  const watches = useFetchData();

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = (watches.length + 1).toString();
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;
    const category = form.category.value;

    const productData = {
      id,
      title,
      price,
      description,
      image,
      category,
    };

    const data = await axios.post("http://localhost:3000/watches", productData);
    if (data?.status === 201) {
      Swal.fire({
        title: "Added!",
        text: "product added successfully.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Failed!",
        text: "failed to add product.",
        icon: "error",
      });
    }
  };

  return (
    <div className="isolate bg-white px-3  lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-custom-third sm:text-4xl">
          Product Information
        </h2>
      </div>
      <form
        onSubmit={handleAddProduct}
        className="mx-auto lg:mt-10 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Title
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-custom-extra ring-1 ring-inset ring-custom-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Price
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-custom-extra ring-custom-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Image URL
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="image"
                id="image"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-custom-extra ring-custom-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Category
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="category"
                id="category"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-custom-extra ring-custom-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                name="description"
                id="description"
                rows="4"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-custom-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:text-black shadow-sm btn-ghost focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
