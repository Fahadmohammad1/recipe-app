import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

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
                    <div className="mask mask-squircle w-12 h-12">
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
              <th>
                <button className="btn btn-ghost btn-xs">update</button>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
