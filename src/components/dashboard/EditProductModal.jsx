import axios from "axios";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const EditProductModal = ({ watch }) => {
  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = watch?.id;
    const title = form?.title?.value;
    const price = form.price?.value;
    const description = form?.description?.value;
    const image = form?.image?.value;
    const category = form?.category?.value;

    const productData = {
      id,
      title,
      price,
      description,
      image,
      category,
    };

    const data = await axios.patch(
      `http://localhost:3000/watches/${watch.id}`,
      productData
    );

    if (data?.status === 200) {
      document.getElementById("my_modal_3").close();

      Swal.fire({
        title: "Updated!",
        text: "product updated successfully.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Failed!",
        text: "failed to update product.",
        icon: "error",
      });
    }
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Update Product
          </h2>
          <form
            onSubmit={handleUpdateProduct}
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
                    defaultValue={watch?.title}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                    defaultValue={watch?.price}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                    defaultValue={watch?.image}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                    defaultValue={watch?.category}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                    defaultValue={watch?.description}
                    rows="4"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default EditProductModal;
