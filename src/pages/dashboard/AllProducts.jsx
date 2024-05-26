import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const AllProducts = () => {
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

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await axios.delete(`http://localhost:3000/watches/${id}`);

        if (data?.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Failed!",
            text: "Product failed to delete.",
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image & Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {watches?.map((watch) => (
            <tr key={watch.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-14 h-14">
                      <img src={watch?.image} alt="watch" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{watch?.title}</div>
                  </div>
                </div>
              </td>
              <td>{watch.price}</td>
              <td>{watch.category}</td>
              <td>
                <button className="btn btn-ghost btn-xs bg-orange-200 lg:mr-2">
                  update
                </button>
                <button
                  onClick={() => handleDelete(watch.id)}
                  className="btn btn-ghost btn-xs bg-red-400"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
